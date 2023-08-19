import React from "react";

const noop = () => {};

export const Option: React.FC<
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
