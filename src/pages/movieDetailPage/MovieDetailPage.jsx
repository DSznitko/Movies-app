import React from "react";
import classes from "./MovieDetailPage.module.css";

const MovieDetailPage = () => {
  return (
    <>
      <div className={classes.movieDetail__wrapper}>
        <h1 className={classes.title}></h1>
        <img className={classes.image} src="" alt="" />
        <p className={classes.description}></p>
        <div className={classes.date__voteAvr}>
          <span className={classes.date}>
            <strong className={classes.bold}>Relase date:</strong>
          </span>
          <span className={classes.voteAvr}></span>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
