import React from "react";
import classes from "./BurgerIngredient.module.css";

interface IProps {
  type: string;
}

const BurgerIngredient: React.FC<IProps> = (props: IProps) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-botton":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "chease":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
