import React, { useState } from "react";
import Auxiliary from "./../../hoc/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import { IIngredients } from "./../../models/Ingredients";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState<IIngredients>({
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  });

  return (
    <Auxiliary>
      <Burger ingredients={ingredients} />
      <div>Build Controls</div>
    </Auxiliary>
  );
};

export default BurgerBuilder;
