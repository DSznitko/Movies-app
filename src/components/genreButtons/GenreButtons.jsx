import React, { useContext, useEffect } from "react";
import classes from "./GenreButtons.module.css";
import GenreMoviesContext from "../../context/GenreMoviesContext";

const GenreButtons = () => {
  const {
    setActiveGenre,
    activeGenre,
    filteredMovies,
    setFilteredMovies,
    genreMovies,
  } = useContext(GenreMoviesContext);

  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredMovies(genreMovies);
      return;
    }

    const currentFilteredMovies = genreMovies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilteredMovies(currentFilteredMovies);
  }, [activeGenre]);

  return (
    <>
      <div className={classes.buttons}>
        <button
          onClick={() => setActiveGenre(0)}
          className={`${
            activeGenre === 0 ? classes.active : classes.genre__button
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveGenre(28)}
          className={`${
            activeGenre === 28 ? classes.active : classes.genre__button
          }`}
        >
          Action
        </button>
        <button
          onClick={() => setActiveGenre(35)}
          className={`${
            activeGenre === 35 ? classes.active : classes.genre__button
          }`}
        >
          Comedy
        </button>
        <button
          onClick={() => setActiveGenre(80)}
          className={`${
            activeGenre === 80 ? classes.active : classes.genre__button
          }`}
        >
          Crime
        </button>
        <button
          onClick={() => setActiveGenre(14)}
          className={`${
            activeGenre === 14 ? classes.active : classes.genre__button
          }`}
        >
          Fantasy
        </button>
      </div>
    </>
  );
};

export default GenreButtons;
