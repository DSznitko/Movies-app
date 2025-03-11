import React from "react";
import classes from "./ToastMessage.module.css";

const ToastMessage = ({ movieTitle, message, type }) => {
  return (
    <span>
      <strong>{`"${movieTitle}"`}</strong>
      {message}
    </span>
  );
};

export default ToastMessage;
