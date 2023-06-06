import React from "react";
import classes from "./GenresMovies.module.css";
import GenreButtons from "../genreButtons/GenreButtons";
import Pagination from "../pagination/Pagination";
import useFetchData from "../../hooks/useFetch";

const GenresMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

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
