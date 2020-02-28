import React from "react";
import { ErrorMessage, useField } from "formik";
import classes from "./CustomSelect.module.css";

const CustomSelect = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.Select}>
      <label htmlFor={props.id || props.name} className={classes.Label}>{label}</label>
      <select {...field} {...props} className={classes.SelectElement}/>
      {meta.touched && meta.error ? (
        <ErrorMessage name="custom" component="div" />
      ) : null}
    </div>
  );
};

export default CustomSelect;
