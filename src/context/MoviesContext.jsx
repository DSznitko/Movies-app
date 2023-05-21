import { createContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [favMovies, setFavMovies] = useState([]);
  const [movieAdded, setMovieAdded] = useState(false);

  const addFavMovieHandler = (movie) => {
    if (favMovies.length + 1 && favMovies.find((el) => el.movie === movie)) {
      return alert("you have already added this movie!!");
    }
    setFavMovies((prevMovie) => {
      return [...prevMovie, { movie }];
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
