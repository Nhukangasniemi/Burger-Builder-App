import React from "react";
import Auxiliary from "./../../../hoc/Auxiliary";
import { IIngredients } from './../../../models/Ingredients';

interface IProps {
    ingredients: IIngredients
}

const OrderSummary = (props: IProps) => {
  const { ingredients } = props;
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
      <ul>
          {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default OrderSummary;
