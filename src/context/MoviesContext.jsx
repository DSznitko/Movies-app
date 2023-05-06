import { createContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);

  const addFavMovieHandler = (movie) => {
    setFavMovies((prevMovie) => {
      return [...prevMovie, { movie, added: true }];
    });
  };

  return (
    <MoviesContext.Provider
      value={{ favMovies, setFavMovies, addFavMovieHandler }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
