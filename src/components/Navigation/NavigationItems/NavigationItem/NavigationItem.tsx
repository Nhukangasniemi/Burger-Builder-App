import React from "react";
import classes from "./NavigationItem.module.css";

interface IProps {
    link: string,
    active: boolean,
    children: React.ReactChild
}

const NavigationItem = (props: IProps) => {

  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : undefined}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
