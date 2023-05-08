import React from "react";
import classes from "./MovieDetailPage.module.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetch";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const api_key = process.env.REACT_APP_API_KEY;

  const { error, data } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&id=${movieId}`
  );

  console.log(data);

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
