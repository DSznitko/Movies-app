import React, { useContext, useEffect } from "react";
import classes from "./FavoriteMovies.module.css";
import MoviesContext from "../../context/MoviesContext";

const FavoriteMovies = () => {
  const { favMovies, setFavMovies } = useContext(MoviesContext);

  console.log(favMovies);
  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <span className={classes.blue}>Your</span> Movies
        </h1>
        {!favMovies.length > 0 ? (
          <p className={classes.no__movies}>
            You haven't added any Movies to your list{" "}
          </p>
        ) : (
          favMovies.map((movie) => {
            return;
          })
        )}
      </div>
    </>
  );
};

export default FavoriteMovies;
