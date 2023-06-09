import React, { useContext } from "react";
import classes from "./GenreMovie.module.css";
import MoviesContext from "../../context/MoviesContext";
import { Link } from "react-router-dom";
import noImageFound from "../../assets/images/no-image.jpg";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const GenreMovie = (props) => {
  const { title, id, poster_path } = props.movieData;
  const { addFavMovieHandler } = useContext(MoviesContext);
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      className={classes.movie__wrapper}
    >
      <span className={classes.movie__title}>{title}</span>
      <Link to={`/${id}`}>
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
      <button
        onClick={() => addFavMovieHandler(props.movieData)}
        className={classes.movie__add}
      >
        add to fav
        <FaHeart className={classes.fav__icon} />
      </button>
    </motion.div>
  );
};

export default GenreMovie;
