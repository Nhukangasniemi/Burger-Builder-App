import React, { useState, useCallback } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import { IIngredients } from "./../../models/Ingredients";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../UI/Modal/Modal";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";

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
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchaseState = (ingredients: IIngredients) => {
    const sum = Object.values(ingredients).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    setPurchasable((sum > 0) as boolean);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancellHandler = useCallback(() => {
    setPurchasing(false);
  }, []);

  const purchaseContinueHandler = () => {
    alert("You continue!");
  };

  const addIngredientHandler = (type: string) => {
    const oldCount = ingredients[type] as number;
    const updatedCounted = oldCount + 1;
    const updatedIngredients = { ...ingredients, [type]: updatedCounted };
    setIngredients(updatedIngredients);
    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(prevPrice => prevPrice + priceAddition);
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type: string) => {
    const oldCount = ingredients[type] as number;
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = { ...ingredients, [type]: updatedCounted };
    setIngredients(updatedIngredients);
    const priceAddition = INGREDIENT_PRICES[type];
    setTotalPrice(prevPrice => prevPrice - priceAddition);
    updatePurchaseState(updatedIngredients);
  };

  let disabledInfo: { [key: string]: boolean } = {};

  for (let key in ingredients) {
    disabledInfo[key] = (ingredients[key] <= 0) as boolean;
  }

  return (
    <Auxiliary>
      <Modal show={purchasing} modalClosed={purchaseCancellHandler}>
        <OrderSummary
          price={totalPrice}
          ingredients={ingredients}
          purchaseCancelled={purchaseCancellHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={totalPrice}
        disabledInfo={disabledInfo}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        purchasable={purchasable}
        ordered={purchaseHandler}
      />
    </Auxiliary>
  );
};

export default BurgerBuilder;
