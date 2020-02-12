import React from "react";
import classes from './DrawerToggle.module.css'

interface IProps {
  clicked: () => void;
}

const DrawerToggle = (props: IProps) => {
  const { clicked } = props;
  return (
    <div onClick={clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
