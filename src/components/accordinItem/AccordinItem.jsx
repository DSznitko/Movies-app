import React from "react";
import classes from "./AccordinItem.module.css";

const AccordinItem = (props) => {
  const { answer, question } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.question__box}>
        <p className={classes.question__text}>{question}</p>
        <span className={classes.icon}>+</span>
      </div>
      <p className={classes.answer}>{answer}</p>
    </div>
  );
};

export default AccordinItem;
