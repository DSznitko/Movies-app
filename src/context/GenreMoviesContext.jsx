import { createContext, useState, useEffect, useCallback } from "react";
import useFetchData from "../hooks/useFetch";

const GenreMoviesContext = createContext();

export const GenreMoviesContextProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [page, setPage] = useState(1);

  const api_key = process.env.REACT_APP_API_KEY;
  let API_CALL =
    activeGenre === 0
      ? `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${activeGenre}&language=en-US&page=${page}`;

  const { data } = useFetchData(API_CALL);

  useEffect(() => {
    setFilteredMovies(data.results);
  }, [data]);

  const nextPageHandler = useCallback(() => {
    return setPage((prev) => prev + 1);
  }, []);

  const prevPageHandler = useCallback(() => {
    return setPage((prev) => prev - 1);
  }, []);

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
