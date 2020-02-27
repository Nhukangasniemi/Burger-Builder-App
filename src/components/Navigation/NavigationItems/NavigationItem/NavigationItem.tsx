import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

interface IProps {
  link: string;
  children: React.ReactChild;
  exact?: boolean
}

const NavigationItem = (props: IProps) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact={props.exact} to={props.link} activeClassName={classes.active}>{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
