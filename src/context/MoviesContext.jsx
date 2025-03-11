import { createContext, useState, useEffect } from "react";
import {
  addMovieToast,
  sameMovieToast,
  removeMovieToast,
} from "../utils/toasts";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const sotredFavoriteMovies =
    JSON.parse(localStorage.getItem("favorite-movies")) || [];

  const [favMovies, setFavMovies] = useState(sotredFavoriteMovies);
  const [movieAdded, setMovieAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorite-movies", JSON.stringify(favMovies));
  }, [favMovies]);

  const addFavMovieHandler = (movie) => {
    if (
      favMovies.length + 1 &&
      favMovies.find((el) => el.movie.id === movie.id)
    ) {
      return sameMovieToast(movie?.title);
    }
    setFavMovies((prevMovie) => {
      return [...prevMovie, { movie }];
    });
    setMovieAdded(true);
    addMovieToast(movie.title);
  };

  const removeMovieHandler = (id) => {
    const removedMovie = favMovies?.find(
      (favMovie) => favMovie.movie.id === id
    );
    console.log(removedMovie);
    removeMovieToast(removedMovie.movie.title);

    setFavMovies(
      favMovies.filter((favoriteMovie) => favoriteMovie.movie.id !== id)
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        favMovies,
        setFavMovies,
        addFavMovieHandler,
        movieAdded,
        setMovieAdded,
        removeMovieHandler,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
