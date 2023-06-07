import React, { useContext, useEffect } from "react";
import classes from "./GenresMovies.module.css";
import GenreButtons from "../genreButtons/GenreButtons";
import Pagination from "../pagination/Pagination";
import useFetchData from "../../hooks/useFetch";
import GenreMoviesContext from "../../context/GenreMoviesContext";
import GenreMovie from "../genreMovie/GenreMovie";

const GenresMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const { genreMovies, setGenreMovies, page } = useContext(GenreMoviesContext);
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`
  );

  useEffect(() => {
    setGenreMovies(data.results);
  }, [data]);

  return (
    <>
      <section className={classes.movie__genres}>
        <h3 className={classes.title}>
          <span className={classes.blue__bold}>Choose</span>by genre
        </h3>
        <GenreButtons />
        <ul className={classes.genre__movies}>
          {genreMovies &&
            genreMovies.map((genreMovie) => {
              return <GenreMovie key={genreMovie.id} movieData={genreMovie} />;
            })}
        </ul>
        <Pagination />
      </section>
    </>
  );
};

export default GenresMovies;
