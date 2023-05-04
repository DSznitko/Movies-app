import { createContext } from "react";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};

export default MoviesContext;
