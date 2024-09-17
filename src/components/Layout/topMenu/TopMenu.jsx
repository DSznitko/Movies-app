import React, { useState, useEffect, useContext, useCallback } from "react";
import { FaHeart } from "react-icons/fa";
import classes from "./TopMenu.module.css";
import { Link, useSearchParams } from "react-router-dom";
import SearchInput from "../../UI/SearchInput";
import useFetchData from "../../../hooks/useFetch";
import Movie from "../../movie/Movie";
import MoviesContext from "../../../context/MoviesContext";
import LoadingIndicator from "../../UI/LoadingIndicator";
import { debounce } from "lodash";

const TopMenu = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const { favMovies, movieAdded, setMovieAdded } = useContext(MoviesContext);
  const [showSearchInput, setShowSearchInput] = useState(true);
  const [search, setSearch] = useSearchParams();
  const { data: searchedMovies, loading } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&${search.toString()}`
  );

  // Handle input change with debounce
  const handleInputChange = useCallback(
    debounce((e) => {
      const inputValue = e.target.value;

      if (inputValue.length === 0) {
        search.delete("query");
        setSearch(search, {
          replace: true,
        });
      }

      search.set("query", inputValue);
      setSearch(search, {
        replace: true,
      });
    }, 300),
    [search, setSearch]
  );

  // Add movie animation handling
  useEffect(() => {
    if (favMovies.length === 0) return;

    setMovieAdded(true);

    const timer = setTimeout(() => {
      setMovieAdded(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [favMovies, setMovieAdded]);

  // Reset search query and scroll to top
  const resetSearch = () => {
    search.delete("query");
    setSearch(search, {
      replace: true,
    });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  // Show or hide search input based on window scroll position
  useEffect(() => {
    const showSearchInputHandler = () => {
      setShowSearchInput(window.scrollY <= 400);
    };

    window.addEventListener("scroll", showSearchInputHandler);
    return () => window.removeEventListener("scroll", showSearchInputHandler);
  }, []);

  const fetchingText = "Fetching Movies...";

  const searchInput = showSearchInput && (
    <SearchInput setSearchValue={handleInputChange} />
  );

  // Render the movie list
  const showMovies =
    !searchedMovies || !searchedMovies.results ? null : (
      <ul className={classes.movies__list}>
        {searchedMovies.results.map((movie) => (
          <Movie key={movie.id} movieData={movie} />
        ))}
      </ul>
    );

  return (
    <>
      <div className={classes.topMenu}>
        <Link onClick={resetSearch} to="/" className={classes.logo}>
          <h1 className={classes.headerLogo}>
            <span className={classes.blue}>Mo</span>vies
            <span className={classes.blue}>A</span>pp
          </h1>
        </Link>
        <span className={classes.topMenu__text}>
          The best movies search platform!
        </span>
        {searchInput}
        <Link
          onClick={resetSearch}
          className={classes.fav__link}
          to="/fav-movies"
        >
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
        {loading && <LoadingIndicator title={fetchingText} />}
      </div>
      {searchedMovies?.results?.length === 0 &&
        showSearchInput &&
        search.get("query") && (
          <p className={classes.movies_notFound}>
            No movies found, please type another title.
          </p>
        )}
      {showMovies}
    </>
  );
};

export default TopMenu;
