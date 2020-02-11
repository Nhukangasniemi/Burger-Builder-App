import React, { useState } from "react";
import Auxiliary from "./../../hoc/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import { IIngredients } from "./../../models/Ingredients";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";

interface IPrice {
  [key: string]: number;
}

const INGREDIENT_PRICES: IPrice = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState<IIngredients>({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  const [totalPrice, setTotalPrice] = useState(4);

  const addIngredientHandler = (type: string) => {
    const oldCount = ingredients[type] as number;
    const updatedCounted = oldCount + 1;
    setIngredients(prevIng => ({ ...prevIng, [type]: updatedCounted }));
    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(prevPrice => prevPrice + priceAddition);
  };

  const removeIngredientHandler = (type: string) => {
    const oldCount = ingredients[type] as number;
    const updatedCounted = oldCount - 1;
    setIngredients(prevIng => ({ ...prevIng, [type]: updatedCounted }));
    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(prevPrice => prevPrice - priceAddition);
  };

  return (
    <Auxiliary>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
      />
    </Auxiliary>
  );
};

export default BurgerBuilder;
