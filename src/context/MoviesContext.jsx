import { createContext, useState } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [searchedMovies, setSearchedMovies] = useState("dzialaaa");

  return (
    <MoviesContext.Provider value={{ searchedMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
