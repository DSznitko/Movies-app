import { createContext, useState } from "react";

const GenreMoviesContext = createContext();

export const GenreMoviesContextProvider = ({ children }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <GenreMoviesContext.Provider
      value={{ genreMovies, setGenreMovies, page, setPage }}
    >
      {children}
    </GenreMoviesContext.Provider>
  );
};
