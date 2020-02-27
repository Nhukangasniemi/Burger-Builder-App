import React, { useState, useEffect } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { RouteComponentProps } from "react-router";
import { IIngredients } from './../../models/Ingredients';

interface IngredientsObject {
  [key: string]: number;
}
interface IParams {}

const Checkout: React.FC<RouteComponentProps<IParams>> = ({
  history,
  match,
  location
}) => {
  const [ingredients, setingredients] = useState<IIngredients>({
    bacon: 0,
    meat: 0,
    salad: 0,
    cheese: 0
  });

  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => { 
    history.replace("/checkout/contact-data");
  };

  useEffect(() => {
    setingredients(location.state as IIngredients);
  }, [location]);

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCancelled={checkoutCancelledHandler}
        onCheckoutContinued={checkoutContinuedHandler}
      />
    </div>
  );
};

export default Checkout;
