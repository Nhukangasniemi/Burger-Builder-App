import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { IIngredients } from "./../../models/Ingredients";

interface IProps {
  ingredients: IIngredients;
}

const Burger: React.FC<IProps> = props => {
  const { ingredients } = props;
  let transformIngredients = Object.keys(ingredients)
    .map(igKey =>
      [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient type={igKey} key={igKey + i} />
      ))
    )
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = [<p key="ExtraText">Please Add Ingredients</p>]
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
