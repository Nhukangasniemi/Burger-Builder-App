import React, { useState } from "react";
import Button from "./../../../UI/Button/Button";
import classes from "./ContactData.module.css";
import { IIngredients } from "./../../../models/Ingredients";
import axios from '../../../axios-oders'
import Spinner from "../../../UI/Spinner/Spinner";
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any> {
  ingredients: IIngredients;
    price: number,
}

const ContactData: React.FC<IProps> = ({ ingredients, price, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    street: "",
    postalCode: ""
  });
  const [loading, setLoading] = useState(false)

  const orderHandler = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const order = {
        ingredients,
        price: price,
        customer: {
          name: "Nhu Kangasniemi",
          address: {
            street: "Keinulaudantie 1",
            zipCode: "00940",
            country: "Finland"
          }
        },
        deliveryMethod: "fastest"
      };
     await axios.post("/orders.json", order);
    setLoading(false);
     history.push('/')
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if(loading) {
      return <Spinner />
  }

  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Your postal code"
        />
        <Button btnType="Success" clicked={orderHandler}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
