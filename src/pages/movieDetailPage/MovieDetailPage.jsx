import React from "react";
import classes from "./MovieDetailPage.module.css";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetch";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const api_key = process.env.REACT_APP_API_KEY;

  const { error, data } = useFetchData(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`
  );

  const { overview, poster_path, release_date, title, vote_average } = data;

  return (
    <>
      <div className={classes.movieDetail__wrapper}>
        <h1 className={classes.title}>{title}</h1>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className={classes.date__voteAvr}>
          <span className={classes.date}>
            <strong className={classes.bold}>Relase date: </strong>
            {release_date}
          </span>
          <span className={classes.voteAvr}>
            {vote_average && vote_average.toFixed(1)}
          </span>
        </div>
        <p className={classes.description}>{overview}</p>
      </div>
    </>
  );
};

export default MovieDetailPage;
