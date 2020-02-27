import React from "react";
import classes from "./Button.module.css";

type MyButton = {
  [key: string]: string;
};

interface IProps {
  children: React.ReactNode;
  btnType: any;
  clicked: (e?: any) => void;
}

const Button = (props: IProps) => {
  const { btnType } = props;
  const buttonClass: MyButton = { ...classes };
  const buttonType = buttonClass[btnType];
  return (
    <button
      className={`${classes.Button} ${buttonType}`}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
