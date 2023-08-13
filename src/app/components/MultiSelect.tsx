import React from "react";
import { difference } from "set-fns";

const noop = () => {};

type Props<Name extends string> = Omit<
  React.JSX.IntrinsicElements["select"],
  "onSelect" | "name"
> & {
  maxSelections?: number;
  name: Name;
  zerosum?: boolean;
  options: string[];
  onSelect?: (_: Record<Name, Record<string, number>>) => void;
};

const Option: React.FC<
  {
    i: number;
    name: string;
    onClick: () => void;
    checked?: boolean;
    disabled?: boolean;
  } & (
    | {
        disabledWeights?: boolean;
        locked: boolean;
        onClickWeightLock: () => void;
        onWeightChange: (x: number) => void;
        weight: number;
      }
    | {}
  )
> = ({ checked, disabled, i, name, onClick, ...rest }) => {
  const sCursor = { cursor: "pointer", display: "inline-block" };
  const controlName = `${name}_${i}`;
  return (
    <span
      style={
        "weight" in rest
          ? {
              display: "flex",
              alignItems: "center",
            }
          : {}
      }
    >
      <span
        style={{ ...sCursor, marginRight: 16, whiteSpace: "nowrap" }}
        onClick={disabled ? noop : onClick}
      >
        <input
          disabled={disabled}
          style={sCursor}
          name={controlName}
          type="checkbox"
          checked={checked}
          onChange={() => /* handled by span, silence react warnings */ null}
        />
        <label style={sCursor} htmlFor={controlName}>
          {name}
        </label>
      </span>
      {"onClickWeightLock" in rest ? (
        <>
          <input
            style={{ display: "inline-block", marginRight: 4 }}
            value={rest.weight}
            type="range"
            disabled={rest.locked || rest.disabledWeights}
            min={0}
            max={1}
            step={0.01}
            onChange={(evt) =>
              rest.onWeightChange(parseFloat(evt.currentTarget.value))
            }
          />
          <span style={{ opacity: 0.5, margin: 2 }}>{`${(
            rest.weight * 100
          ).toFixed(0)}%`}</span>
          <button
            style={{ display: "inline-block", padding: 4 }}
            onClick={rest.onClickWeightLock}
          >
            {rest.locked ? "🔒" : "🔓"}
          </button>
        </>
      ) : null}
    </span>
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
    const weight = unhandledWeights[key];
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
    0
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

export const MultiSelect = <Name extends string>({
  name,
  options,
  onSelect,
  zerosum,
  maxSelections,
  ...props
}: Props<Name>) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [lockedWeightSet, setLockedWeightSet] = React.useState(
    new Set<string>()
  );
  const selectedSet = new Set(selected);
  const remOptions = [...difference(options, selectedSet)];
  const [selectedWeights, setSelectedWeights] = React.useState<
    Record<string, number>
  >(getBalancedWeights(selected));
  React.useEffect(() => {
    if (!onSelect) return;
    onSelect({
      [name as Name]: Object.keys(selectedWeights).length
        ? selectedWeights
        : null,
    } as Parameters<typeof onSelect>[0]);
  }, [selected, onSelect, name, selectedWeights]);
  const isNoDof = selected.length - lockedWeightSet.size <= 1;
  return (
    <>
      {selected.length ? (
        selected.map((ss, i) => {
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
                console.log({ nextWeights });
                setSelectedWeights(nextWeights);
                setSelected(nextSelected);
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
                        })
                      );
                    },
                    disabledWeights: isNoDof,
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
      ) : (
        <>
          No options selected
          <br />
        </>
      )}
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
              setSelected(nextSelected);
            }}
          />
        );
      })}
    </>
  );
};
