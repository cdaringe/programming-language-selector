import React from "react";
import { difference } from "set-fns";
import { Option } from "./Option";

type HTMLSelectProps = React.JSX.IntrinsicElements["select"];
type MutliSelectHtmlSeectProps = Omit<
  HTMLSelectProps,
  "onSelect" | "name" | "defaultValue"
>;

type Props<Name extends string> = MutliSelectHtmlSeectProps & {
  defaultValue?: Record<string, number> | null;
  maxSelections?: number;
  name: Name;
  noSelection?: React.ReactNode;
  onSelect?: (_: Record<Name, Record<string, number>>) => void;
  options: string[];
  zerosum?: boolean;
};

export const MultiSelect = <Name extends string>({
  name,
  options,
  onSelect,
  zerosum,
  maxSelections,
  noSelection,
  defaultValue,
  ...props
}: Props<Name>) => {
  const [selected, setSelected] = React.useState<string[]>(
    Object.keys(defaultValue || {}),
  );
  const [lockedWeightSet, setLockedWeightSet] = React.useState(
    new Set<string>(),
  );
  const selectedSet = new Set(selected);
  const remOptions = [...difference(options, selectedSet)];
  const [selectedWeights, setSelectedWeights] = React.useState<
    Record<string, number>
  >(defaultValue || getBalancedWeights(selected));
  React.useEffect(
    function emitSelection() {
      if (!onSelect) return;
      onSelect({
        [name as Name]: Object.keys(selectedWeights).length
          ? selectedWeights
          : null,
      } as Parameters<typeof onSelect>[0]);
    },
    [selected, onSelect, name, selectedWeights],
  );
  const isOutOfDof = selected.length - lockedWeightSet.size <= 1;
  return (
    <>
      {selected.length
        ? selected.map((ss, i) => {
            return (
              <Option
                key={i}
                checked
                i={i}
                onClick={() => {
                  lockedWeightSet.delete(ss);
                  selectedSet.delete(ss);
                  const nextSelected = [...selectedSet];
                  setLockedWeightSet(new Set(lockedWeightSet));

                  const nextWeights = getBalancedWeights(nextSelected);
                  setSelectedWeights(nextWeights);
                  setSelected(nextSelected.sort());
                }}
                {...(zerosum && ss in selectedWeights
                  ? {
                      weight: selectedWeights[ss],
                      onWeightChange(weight) {
                        selectedWeights[ss] = weight;

                        setSelectedWeights(
                          rebalanceWeights({
                            key: ss,
                            value: weight,
                            selectedWeights,
                            lockedWeightSet,
                          }),
                        );
                      },
                      disabledWeights: isOutOfDof,
                      locked: lockedWeightSet.has(ss),
                      onClickWeightLock() {
                        lockedWeightSet.has(ss)
                          ? lockedWeightSet.delete(ss)
                          : lockedWeightSet.add(ss);
                        setLockedWeightSet(new Set(lockedWeightSet));
                      },
                    }
                  : {})}
                name={ss}
              />
            );
          })
        : noSelection}
      <br />
      {remOptions.map((name, i) => {
        return (
          <Option
            disabled={selected.length >= (maxSelections || Number.MAX_VALUE)}
            checked={false}
            key={i}
            i={i}
            name={name}
            onClick={() => {
              selectedSet.add(name);
              const nextSelected = [...selectedSet];
              const nextWeights = getBalancedWeights(nextSelected);
              console.log({ nextWeights });
              setSelectedWeights(nextWeights);
              setSelected(nextSelected.sort());
            }}
          />
        );
      })}
    </>
  );
};

function getBalancedWeights(selected: string[]) {
  const equalWeight = 1 / selected.length;
  return selected.reduce((acc, it) => ({ ...acc, [it]: equalWeight }), {});
}

function rebalanceWeights({
  key,
  value,
  selectedWeights,
  lockedWeightSet,
}: {
  key: string;
  value: number;
  selectedWeights: Record<string, number>;
  lockedWeightSet: Set<string>;
}) {
  const next: Record<string, number> = {};
  const unhandledWeights = { ...selectedWeights };
  let rem = 1;

  if (lockedWeightSet.has(key)) {
    throw new Error(`${key} in locked set--should not change!`);
  }

  // handle locked values
  for (const key of lockedWeightSet) {
    const weight = unhandledWeights[key]!;
    next[key] = weight;
    rem = rem - weight;
    delete unhandledWeights[key];
  }

  // handle changed value
  const nextValue = value >= rem ? rem : value;
  rem = rem - nextValue;
  next[key] = nextValue;
  delete unhandledWeights[key];

  // handle redistribution/rescaling
  const lastRem = Object.values(unhandledWeights).reduce(
    (sum, x) => x + sum,
    0,
  );
  const scalar = lastRem ? rem / lastRem : 1;
  const numUnhandled = Object.keys(unhandledWeights).length;
  const defaultWeight = rem / numUnhandled;
  Object.entries(unhandledWeights).forEach(([name, weight], i) => {
    const isLast = i + 1 === numUnhandled;
    if (isLast) {
      // handle rounding errors
      next[name] = rem;
      rem = 0;
    } else {
      const nextWeight = (weight || defaultWeight) * scalar;
      rem = rem - nextWeight;
      next[name] = nextWeight;
    }
  });

  if (rem !== 0) {
    throw new Error("rebalance failed");
  }
  // const sumIs1Check = Object.values(next).reduce((sum, x) => x + sum, 0);
  // console.log({ sumIs1Check });
  return next;
}
