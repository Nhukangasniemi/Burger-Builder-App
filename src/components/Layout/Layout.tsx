import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

const Layout = (props: { children: React.ReactNode }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prev => !prev)
  }

  return (
    <Auxiliary>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
