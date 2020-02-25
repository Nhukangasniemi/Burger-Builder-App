import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import React from "react";
import Checkout from "./containers/Checkout/Checkout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};

export default App;
