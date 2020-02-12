import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../../UI/Backdrop/Backdrop";

interface IProps {
  closed: () => void;
  open: boolean;
}

const SideDrawer = (props: IProps) => {
  const { closed, open } = props;
  let attachedClass = `${classes.SideDrawer} ${classes.Close}`;
  if (open) {
    attachedClass = `${classes.SideDrawer} ${classes.Open}`;
  }
  return (
    <Auxiliary>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClass}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDrawer;
