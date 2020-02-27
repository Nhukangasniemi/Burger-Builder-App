import React from "react";
import classes from "./Order.module.css";
import { IIngredients } from "./../../models/Ingredients";

interface IProps {
  ingredients: IIngredients;
  price: number;
}

const Order: React.FC<IProps> = ({ ingredients, price }) => {
  const ingredientsArray = [];
  for (let key in ingredients) {
    ingredientsArray.push({ name: key, amount: ingredients[key] });
  }

  const ingredientsOutput = ingredientsArray.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(price.toFixed(2))}</strong>{" "}
      </p>
    </div>
  );
};

export default Order;
