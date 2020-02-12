import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { IIngredients } from "./../../../models/Ingredients";
import Button from "./../../../UI/Button/Button";

interface IProps {
  ingredients: IIngredients;
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
  price: number;
}

const OrderSummary = (props: IProps) => {
  const { ingredients, purchaseCancelled, purchaseContinued, price } = props;

  const ingredientSummary = Object.keys(ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {ingredients[key]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
