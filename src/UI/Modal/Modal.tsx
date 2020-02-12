import React from "react";
import classes from "./Modal.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from './../Backdrop/Backdrop';

const Modal = React.memo((props: any) => {
  const {modalClosed, show} = props

  return (
    <Auxiliary>
        <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  );
});

export default Modal;
