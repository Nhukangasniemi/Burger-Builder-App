import React from "react";
import classes from "./BuildControl.module.css";

interface IProps {
  label: string;
  added: () => void;
  removed: () => void;
}

const BuildControl: React.FC<IProps> = props => {
  const { added, removed } = props;

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={removed}>Less</button>
      <button className={classes.More} onClick={added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
