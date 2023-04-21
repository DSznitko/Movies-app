import React from "react";
import { FaHeart } from "react-icons/fa";
import classes from "./TopMenu.module.css";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
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
      <div className={classes.favMovies}>
        <h3 className={classes.favMovies__title}>Your Movies</h3>
        <FaHeart className={classes.favMovies__icon} />
      </div>
    </div>
  );
};

export default TopMenu;
