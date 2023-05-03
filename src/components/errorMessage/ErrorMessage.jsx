import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return <p className={classes.error__msg}>{props.children}</p>;
};

export default ErrorMessage;
