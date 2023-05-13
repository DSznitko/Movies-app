import React, { useState, useEffect, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import classes from "./TopMenu.module.css";
import { Link } from "react-router-dom";
import SearchInput from "../UI/SearchInput";
import useFetchData from "../../hooks/useFetch";
import Movie from "../movie/Movie";
import useWidnowWidth from "../../hooks/useWidnowWidth";
import MoviesContext from "../../context/MoviesContext";

const TopMenu = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const { favMovies, movieAdded, setMovieAdded } = useContext(MoviesContext);
  const { width } = useWidnowWidth();

  const [searchValue, setSesrchValue] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchValue}`
  );

  useEffect(() => {
    let movies = data.results;
    setSearchedMovies(movies);
  }, [data]);

  // add movie animation handling
  useEffect(() => {
    if (favMovies.length === 0) {
      return;
    }

    setMovieAdded(true);

    const timer = setTimeout(() => {
      setMovieAdded(false);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [favMovies]);

  const resetSearch = () => {
    setSearchedMovies([]);
    setSesrchValue("");
  };

  return (
    <>
      <div className={classes.topMenu}>
        <Link onClick={() => resetSearch()} to="/" className={classes.logo}>
          <h1 className={classes.headerLogo}>
            <span className={classes.blue}>Mo</span>vies
            <span className={classes.blue}>A</span>pp
          </h1>
        </Link>
        {width > 980 && (
          <span className={classes.topMenu__text}>
            The best movies search platform!
          </span>
        )}

        <SearchInput
          setSesrchValue={setSesrchValue}
          searchValue={searchValue}
        />
        <Link className={classes.fav__link} to="/fav-movies">
          <div className={classes.favMovies}>
            <h3 className={classes.favMovies__title}>Your Movies</h3>
            <FaHeart
              className={`${classes.favMovies__icon} ${
                movieAdded ? classes.bump : ""
              }`}
            />
            <span className={classes.movies__count}>{favMovies.length}</span>
          </div>
        </Link>
      </div>
      <ul className={classes.movies__list}>
        {searchedMovies &&
          searchedMovies.map((movie) => (
            <Movie
              key={movie.id}
              movieData={movie}
              setSearchedMovies={setSearchedMovies}
              setSesrchValue={setSesrchValue}
            />
          ))}
      </ul>
    </>
  );
};

export default TopMenu;
