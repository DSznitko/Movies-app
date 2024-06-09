import React from "react";
import { OrbitProgress } from "react-loading-indicators";
import classes from "./LoadingIndicator.module.css";

const LoadingIndicator = ({ title }) => {
  return (
    <div className={classes.wrapper}>
      <OrbitProgress
        variant="bubble-dotted"
        color="rgb(11, 100, 235)"
        size="medium"
      />
      <p className={classes.loadingText}>{title}</p>
    </div>
  );
};

export default LoadingIndicator;
