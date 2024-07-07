import React, { useContext } from "react";
import classes from "./GenresMovies.module.css";
import GenreButtons from "../genreButtons/GenreButtons";
import Pagination from "../pagination/Pagination";
import GenreMoviesContext from "../../context/GenreMoviesContext";
import GenreMovie from "../genreMovie/GenreMovie";
import { motion } from "framer-motion";
import LoadingIndicator from "../UI/LoadingIndicator";

const GenresMovies = () => {
  const { filteredMovies, loading } = useContext(GenreMoviesContext);
  const loadingText = "Loading movies...";

  return (
    <>
      <section className={classes.movie__genres}>
        <h3 className={classes.title}>
          <span className={classes.blue}>Choose</span>by genre
        </h3>
        <GenreButtons />
        {loading && <LoadingIndicator title={loadingText} />}
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
