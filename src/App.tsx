import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import React from "react";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
