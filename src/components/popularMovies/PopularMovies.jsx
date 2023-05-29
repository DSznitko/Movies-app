import React, { useState, useEffect } from "react";
import classes from "./PopularMovies.module.css";
import useFetchData from "../../hooks/useFetch";
import PopularMovie from "../popularMovie/PopularMovie";

const PopularMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [popular, setPopular] = useState([]);

  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  useEffect(() => {
    setPopular(data.results);
  }, [data]);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>
        <span className={classes.blue__bold}>Popular</span> Now
      </h2>
      <ul className={classes.popular__list}>
        {popular &&
          popular.map((movie) => (
            <PopularMovie key={movie.id} popularData={movie} />
          ))}
      </ul>
    </section>
  );
};

export default PopularMovies;
