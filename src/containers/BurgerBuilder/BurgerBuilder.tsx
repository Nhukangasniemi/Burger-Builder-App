import React, { useState } from "react";
import Auxiliary from "./../../hoc/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import { IIngredients } from "./../../models/Ingredients";
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState<IIngredients>({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  return (
    <Auxiliary>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </Auxiliary>
  );
};

export default BurgerBuilder;
