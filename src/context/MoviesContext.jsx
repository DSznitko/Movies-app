import { createContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);
  const [movieAdded, setMovieAdded] = useState(false);

  const addFavMovieHandler = (movie) => {
    setFavMovies((prevMovie) => {
      return [...prevMovie, { movie, added: true }];
    });
    setMovieAdded(true);
  };

  return (
    <MoviesContext.Provider
      value={{
        favMovies,
        setFavMovies,
        addFavMovieHandler,
        movieAdded,
        setMovieAdded,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
