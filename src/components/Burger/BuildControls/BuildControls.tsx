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
  disabledInfo: {[key: string]: boolean}
}

const BuildControls: React.FC<IProps> = props => {
  const { ingredientAdded, ingredientRemoved, disabledInfo } = props;

  return (
    <div className={classes.BuildControls}>
      {controls.map(control => (
        <BuildControl
          added={() => ingredientAdded(control.type)}
          removed={() => ingredientRemoved(control.type)}
          disabledInfo={disabledInfo[control.type]}
          key={control.label}
          label={control.label}
        />
      ))}
    </div>
  );
};

export default BuildControls;
