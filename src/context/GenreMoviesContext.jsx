import { createContext, useState } from "react";

const GenreMoviesContext = createContext();

export const GenreMoviesContextProvider = ({ children }) => {
  const [genreMovies, setGenreMovies] = useState([]);
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
      }}
    >
      {children}
    </GenreMoviesContext.Provider>
  );
};

export default GenreMoviesContext;
