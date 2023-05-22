import React from "react";
import classes from "./FavMovie.module.css";
import { Link } from "react-router-dom";
import useVoteColor from "../../hooks/useVoteColor";

const FavMovie = ({ favMovieData }) => {
  const { id, poster_path, title, vote_average, release_date } = favMovieData;
  const { voteColor } = useVoteColor();

  return (
    <>
      <div className={classes.movie__wrapper}>
        <h2 className={classes.movie__title}>{title}</h2>
        <Link to={`/${id}`}>
          <img
            className={classes.movie__img}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </Link>
        <div className={classes.movie__info}>
          <span>
            <span className={classes.blue}>Relase date:</span> {release_date}
          </span>
          <span className={`${classes.movie__avr} ${voteColor(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </>
  );
};

export default FavMovie;