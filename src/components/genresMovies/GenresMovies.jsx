import React, { useContext, useEffect } from "react";
import classes from "./GenresMovies.module.css";
import GenreButtons from "../genreButtons/GenreButtons";
import Pagination from "../pagination/Pagination";
import useFetchData from "../../hooks/useFetch";
import GenreMoviesContext from "../../context/GenreMoviesContext";
import GenreMovie from "../genreMovie/GenreMovie";
import { motion } from "framer-motion";

const GenresMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const { setGenreMovies, filteredMovies, setFilteredMovies, page } =
    useContext(GenreMoviesContext);
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
  );

  useEffect(() => {
    setGenreMovies(data.results);
    setFilteredMovies(data.results);
  }, [setFilteredMovies, setGenreMovies, data]);

  return (
    <>
      <section className={classes.movie__genres}>
        <h3 className={classes.title}>
          <span className={classes.blue}>Choose</span>by genre
        </h3>
        <GenreButtons />
        <motion.ul className={classes.genre__movies}>
          {filteredMovies &&
            filteredMovies.map((movie) => {
              return <GenreMovie key={movie.id} movieData={movie} />;
            })}
        </motion.ul>
        <Pagination />
      </section>
    </>
  );
};

export default GenresMovies;
