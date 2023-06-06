import React from "react";
import classes from "./GenresMovies.module.css";
import GenreButtons from "../genreButtons/GenreButtons";
import Pagination from "../pagination/Pagination";

const GenresMovies = () => {
  return (
    <>
      <section className={classes.movie__genres}>
        <h3 className={classes.title}>
          <span className={classes.blue__bold}>Choose</span>by genre
        </h3>
        <GenreButtons />
        <ul className={classes.genre__movies}>{/* mapping movies */}</ul>
        <Pagination />
      </section>
    </>
  );
};

export default GenresMovies;
