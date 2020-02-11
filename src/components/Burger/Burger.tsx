import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { IIngredients } from "./../../models/Ingredients";

interface IProps {
  ingredients: IIngredients;
}

const Burger: React.FC<IProps> = props => {
  const { ingredients } = props;
  const transformIngredients = Object.keys(ingredients).map(igKey =>
    [...Array(ingredients[igKey])].map((_, i) => <BurgerIngredient type={igKey} key={igKey+i} />)
  );

  return (
    <div className={classes.Burger}>
      {transformIngredients}
    </div>
  );
};

export default Burger;
