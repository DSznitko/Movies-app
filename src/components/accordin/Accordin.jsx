import React from "react";
import classes from "./Accordin.module.css";
import AccordinItem from "../accordinItem/AccordinItem";
import AccordinItems from "./AccordinItems";

const Accordin = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>
          <span className={classes.blue}>Most Frequently</span> asked questions
        </h3>
        {AccordinItems.map((item) => {
          return (
            <AccordinItem
              key={item.id}
              answer={item.answer}
              question={item.questionText}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordin;
