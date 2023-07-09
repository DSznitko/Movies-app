import React, { useContext } from "react";
import classes from "./Pagination.module.css";
import GenreMoviesContext from "../../context/GenreMoviesContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const Pagination = () => {
  const { page, nextPageHandler, prevPageHandler } =
    useContext(GenreMoviesContext);
  return (
    <>
      <div className={classes.wrapper}>
        <button
          disabled={page === 1 ? true : false}
          onClick={() => prevPageHandler()}
          className={`${classes.button} ${page === 1 ? classes.disabled : ""}`}
        >
          <AiOutlineLeft />
        </button>
        <span className={classes.page}>Page: {page}</span>
        <button onClick={() => nextPageHandler()} className={classes.button}>
          <AiOutlineRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
