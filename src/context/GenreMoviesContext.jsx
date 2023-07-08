import { createContext, useState } from "react";

const GenreMoviesContext = createContext();

export const GenreMoviesContextProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [page, setPage] = useState(1);

  const nextPageHandler = () => {
    return setPage((prev) => prev + 1);
  };

  const prevPageHandler = () => {
    return setPage((prev) => prev - 1);
  };

  return (
    <GenreMoviesContext.Provider
      value={{
        genreMovies,
        setGenreMovies,
        page,
        setPage,
        nextPageHandler,
        prevPageHandler,
        activeGenre,
        setActiveGenre,
        filteredMovies,
        setFilteredMovies,
      }}
    >
      {children}
    </GenreMoviesContext.Provider>
  );
};

export default GenreMoviesContext;
