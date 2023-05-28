import React from "react";
import classes from "./PopularMovies.module.css";
import useFetchData from "../../hooks/useFetch";

const PopularMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  console.log(data);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>
        <span className={classes.blue__bold}>Popular</span> Now
      </h2>
      <ul className={classes.popular__list}></ul>
    </section>
  );
};

export default PopularMovies;
