import React from "react";
import { IIngredients } from "./../../../models/Ingredients";
import Burger from "./../../Burger/Burger";
import Button from "./../../../UI/Button/Button";
import classes from './CheckoutSummary.module.css'

interface IProps {
  ingredients: IIngredients;
}
const CheckoutSummary: React.FC<IProps> = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={() => {}}>
          CANCEL
        </Button>
        <Button btnType="Danger" clicked={() => {}}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
