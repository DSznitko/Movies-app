import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import classes from "./TopMenu.module.css";
import { Link } from "react-router-dom";
import SearchInput from "../UI/SearchInput";
import useFetchData from "../../hooks/useFetch";
import SearchedMovie from "../searchedMovie/SearchedMovie";

const TopMenu = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [searchValue, setSesrchValue] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchValue}`
  );

  useEffect(() => {
    let movies = data.results;
    setSearchedMovies(movies);
  }, [data]);

  return (
    <>
      <div className={classes.topMenu}>
        <Link to="/" className={classes.logo}>
          <h1 className={classes.headerLogo}>
            <span className={classes.blue}>Mo</span>vies
            <span className={classes.blue}>A</span>pp
          </h1>
        </Link>
        <span className={classes.topMenu__text}>
          The best movies search platform!
        </span>
        <SearchInput setSesrchValue={setSesrchValue} />
        <div className={classes.favMovies}>
          <h3 className={classes.favMovies__title}>Your Movies</h3>
          <FaHeart className={classes.favMovies__icon} />
        </div>
      </div>
      <ul className={classes.movies__list}>
        {searchedMovies &&
          searchedMovies.map((movie) => (
            <SearchedMovie key={movie.id} movieData={movie} fav={false} />
          ))}
      </ul>
    </>
  );
};

export default TopMenu;
