import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

interface IProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabledInfo: { [key: string]: boolean };
  price: number;
  purchasable: boolean;
  ordered: () => void
}

const BuildControls: React.FC<IProps> = props => {
  const {
    ingredientAdded,
    ingredientRemoved,
    disabledInfo,
    price,
    purchasable,
    ordered
  } = props;

  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          added={() => ingredientAdded(control.type)}
          removed={() => ingredientRemoved(control.type)}
          disabledInfo={disabledInfo[control.type]}
          key={control.label}
          label={control.label}
        />
      ))}
      <button onClick={ordered} disabled={!purchasable} className={classes.OrderButton}>
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
