import React, { useEffect } from "react";
import classes from "./Input.module.css";
import { ErrorMessage } from "formik";

interface IProps {
  field: any;
  form: any;
  props: any;
}

const Input: React.FC<IProps> = ({
  field,
  form: { touched, errors },
  ...props
}) => {

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={field.name}>{field.name}</label>
      <input className={classes.InputElement} {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage name="email" component="div" />
      )}
    </div>
  );
};

export default Input;
