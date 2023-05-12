import React, { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import noImageFound from "../../assets/images/no-image.jpg";
import useVoteColor from "../../hooks/useVoteColor";

const SearchedMovie = ({ movieData, setSearchedMovies, setSesrchValue }) => {
  const { id, title, vote_average, poster_path } = movieData;
  const { voteColor } = useVoteColor();

  const { addFavMovieHandler } = useContext(MoviesContext);

  const resetSearchedValues = () => {
    setSearchedMovies([]);
    setSesrchValue("");
  };

  return (
    <div className={classes.movie__wrapper}>
      <span className={classes.movie__title}>{title}</span>
      <Link onClick={() => resetSearchedValues()} to={`/${id}`}>
        <img
          className={classes.movie__image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noImageFound
          }
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
        <button
          onClick={() => addFavMovieHandler(movieData)}
          className={classes.movie__add}
        >
          add to fav
          <FaHeart className={classes.fav__icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchedMovie;
