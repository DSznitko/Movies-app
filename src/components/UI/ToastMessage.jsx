import React from "react";
import classes from "./ToastMessage.module.css";

const ToastMessage = ({ movieTitle, message }) => {
  return (
    <span className={classes.toasMessage}>
      <strong className={classes.movieTitle}>
        {movieTitle ? `${movieTitle}` : "Movie"}
      </strong>
      {message}
    </span>
  );
};

export default ToastMessage;
