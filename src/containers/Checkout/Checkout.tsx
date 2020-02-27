import React, { useState, useEffect } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { RouteComponentProps } from "react-router";
import { IIngredients } from "./../../models/Ingredients";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

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

  const [price, setPrice] = useState(0)
  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    history.replace("/checkout/contact-data");
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const ingredients: IngredientsObject = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    setPrice(price)
    setingredients(ingredients as IIngredients);
  }, [location]);

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCancelled={checkoutCancelledHandler}
        onCheckoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={match.path + "/contact-data"}
        render={(props) => <ContactData {...props} ingredients={ingredients} price={price} />}
      />
    </div>
  );
};

export default Checkout;
