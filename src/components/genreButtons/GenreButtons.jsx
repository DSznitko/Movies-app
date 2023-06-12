import React from "react";
import classes from "./GenreButtons.module.css";

const GenreButtons = () => {
  return (
    <>
      <div className={classes.buttons}>
        <button className={classes.genre__button}>All</button>
        <button className={classes.genre__button}>Action</button>
        <button className={classes.genre__button}>Comedy</button>
      </div>
    </>
  );
};

export default GenreButtons;
