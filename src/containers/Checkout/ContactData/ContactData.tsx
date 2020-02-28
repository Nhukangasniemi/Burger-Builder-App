import React, { useState } from "react";
import classes from "./ContactData.module.css";
import { IIngredients } from "./../../../models/Ingredients";
import axios from "../../../axios-oders";
import Spinner from "../../../UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router";
import { Formik, Form, Field } from "formik";
import Input from "./../../../UI/Input/Input";
import CustomSelect from "./../../../UI/Input/CustomSelect";

interface IProps extends RouteComponentProps<any> {
  ingredients: IIngredients;
  price: number;
}

const ContactData: React.FC<IProps> = ({ ingredients, price, history }) => {
  const [loading, setLoading] = useState(false);

  const orderHandler = async (values: any) => {
    try {
      setLoading(true);
      const order = {
        ingredients,
        price: price,
        orderData: {
          name: values.name,
          email: values.email,
          street: values.street,
          zipCode: values.postalCode,
          deliveryMethod: values.custom,
          country: "Finland"
        },
      };
      await axios.post("/orders.json", order);
      setLoading(false);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={classes.ContactData}>
      <h4>Enter your contact data</h4>
      <Formik
        initialValues={{
          email: "",
          name: "",
          street: "",
          postalCode: "",
          custom: ""
        }}
        validate={values => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          alert(JSON.stringify(values));
          await orderHandler(values);
          setSubmitting(false);
        }}
      >
        {({
          isSubmitting,
          handleSubmit,
          values,
          handleChange,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="name"
              placeholder="Jane"
              component={Input}
            />

            <Field
              type="email"
              name="email"
              placeholder="jane@abc.com"
              component={Input}
            />

            <Field
              type="text"
              name="street"
              placeholder="Keinulaudantie 1"
              component={Input}
            />
            <Field
              type="text"
              name="postalCode"
              placeholder="00940"
              component={Input}
            />
            <CustomSelect name="custom" label="Delivery Method">
              <option value="">Select delivery method</option>
              <option value="fastest">Fastest</option>
              <option value="cheapest">Cheapest</option>
            </CustomSelect>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactData;
