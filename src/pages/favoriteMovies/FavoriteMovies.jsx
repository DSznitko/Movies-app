import React, { useContext, useEffect } from "react";
import classes from "./FavoriteMovies.module.css";
import MoviesContext from "../../context/MoviesContext";
import FavMovie from "../../components/favMovie/FavMovie";

const FavoriteMovies = () => {
  const { favMovies, setFavMovies } = useContext(MoviesContext);

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <span className={classes.blue}>Your</span> Movies
        </h1>
        {!favMovies.length > 0 ? (
          <p className={classes.no__movies}>
            You haven't added any Movies to your list
          </p>
        ) : (
          favMovies.map((movie) => {
            return <FavMovie key={movie.id} favMovieData={movie} />;
          })
        )}
      </div>
    </>
  );
};

export default FavoriteMovies;
