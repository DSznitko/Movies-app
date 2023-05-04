import React from "react";
import classes from "./SearchedMovie.module.css";
import { Link } from "react-router-dom";

const SearchedMovie = ({ movieData, fav }) => {
  const { id, title, vote_average, poster_path } = movieData;

  const voteColor = (voteAvr) => {
    if (voteAvr < 5) {
      return classes.red;
    }

    if (voteAvr > 5 && voteAvr < 8) {
      return classes.orange;
    }

    return classes.green;
  };

  return (
    <div className={classes.movie__wrapper}>
      <span className={classes.movie__title}>{title}</span>
      <Link to={id}>
        <img
          className={classes.movie__image}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </Link>
      <p className={classes.movie__average}>
        Movie vote average:
        <span
          className={`${classes.movie__vote} ${voteColor(
            vote_average.toFixed(2)
          )}`}
        >
          {vote_average}
        </span>
      </p>
    </div>
  );
};

export default SearchedMovie;
