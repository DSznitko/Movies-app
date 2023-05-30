import { createContext, useState, useEffect } from "react";

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
      return alert("you have already added this movie!!");
    }
    setFavMovies((prevMovie) => {
      return [...prevMovie, { movie }];
    });
    setMovieAdded(true);
  };

  const removeMovieHandler = (id) => {
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
