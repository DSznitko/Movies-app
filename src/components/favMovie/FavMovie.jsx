import React from "react";
import classes from "./FavMovie.module.css";
import { Link } from "react-router-dom";
import useVoteColor from "../../hooks/useVoteColor";
import noImage from "../../assets/images/no-image.jpg";
import { BsTrash } from "react-icons/bs";

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
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noImage
            }
            alt={title}
          />
        </Link>
        <div className={classes.movie__info}>
          <span className={classes.date}>
            <span className={classes.blue}>Relase date:</span> {release_date}
          </span>
          <span className={`${classes.movie__avr} ${voteColor(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
          <button className={classes.remove}>
            Remove <BsTrash className={classes.remove__icon} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FavMovie;
