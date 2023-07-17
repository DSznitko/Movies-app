import React, { useState } from "react";
import classes from "./AccordinItem.module.css";

const AccordinItem = (props) => {
  const { answer, question, index } = props;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const accordinHandler = (i) => {
    if (selectedIndex === i) {
      return setSelectedIndex(null);
    }
    setSelectedIndex(i);
  };

  return (
    <div onClick={() => accordinHandler(index)} className={classes.wrapper}>
      <div className={classes.question__box}>
        <p className={classes.question__text}>{question}</p>
        <span className={classes.icon}>
          {selectedIndex === index ? "-" : "+"}
        </span>
      </div>
      <p
        className={
          selectedIndex === index
            ? `${classes.answer} ${classes.answer__show}`
            : classes.answer
        }
      >
        {answer}
      </p>
    </div>
  );
};

export default AccordinItem;
