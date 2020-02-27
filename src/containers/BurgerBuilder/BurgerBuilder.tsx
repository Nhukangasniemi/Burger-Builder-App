import React, { useState, useCallback, useEffect } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "./../../components/Burger/Burger";
import { IIngredients } from "./../../models/Ingredients";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../UI/Modal/Modal";
import OrderSummary from "./../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-oders";
import Spinner from "../../UI/Spinner/Spinner";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

interface IPrice {
  [key: string]: number;
}

const INGREDIENT_PRICES: IPrice = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = (props: any) => {
  const [ingredients, setIngredients] = useState<IIngredients>({
    bacon: 0,
    salad: 0,
    meat: 0,
    cheese: 0
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  const purchaseContinueHandler = async () => {
    const queryParams = []
    for(let i in ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]))
    }
    queryParams.push('price=' + totalPrice)
    const query = queryParams.join('&')
    props.history!.push({
        pathname: '/checkout',
        search: '?' + query
      })
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
    const oldCount = ingredients![type] as number;
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

  useEffect(() => {
    axios
      .get("https://burger-builder-app-b1622.firebaseio.com/ingredients.json")
      .then(response => {
        console.log(response.data);
        setIngredients(response.data);
      })
      .catch(err => {
        setError(true);
      });
  }, [setIngredients]);

  return (
    <Auxiliary>
      <Modal show={purchasing} modalClosed={purchaseCancellHandler}>
        {loading ? (
          <Spinner />
        ) : (
          <OrderSummary
            price={totalPrice}
            ingredients={ingredients}
            purchaseCancelled={purchaseCancellHandler}
            purchaseContinued={purchaseContinueHandler}
          />
        )}
      </Modal>
      {error ? (
        <p>Something wrong happens</p>
      ) : (
        <Auxiliary>
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
      )}
    </Auxiliary>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
