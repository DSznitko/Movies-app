import React from "react";
import classes from "./SearchedMovie.module.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const SearchedMovie = ({ movieData }) => {
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
      <div className={classes.movie__rank}>
        <p className={classes.movie__average}>
          vote average:
          <span className={`${classes.movie__vote} ${voteColor(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        </p>
        <button className={classes.movie__add}>
          add to fav. <FaHeart className={classes.fav__icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchedMovie;
