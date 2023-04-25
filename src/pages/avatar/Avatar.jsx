import React from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./Avatar.module.css";
const Avatar = () => {
  const avatarData = useLoaderData();
  const { title, overview, poster_path, release_date, vote_average } =
    avatarData.results[0];

  return (
    <div className={classes.avatar__wrapper}>
      <div className={classes.main__content}>
        <h1 className={classes.avatar__title}>{title}</h1>
        <img
          className={classes.avatar__img}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className={classes.avatar__relase}>
          <span className={classes.avatar__date}>
            Relase date: {release_date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
const api_key = process.env.REACT_APP_API_KEY;

// loader function to get data for a discarded movie
export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=avatar-the-way-of-water`
  );
  const movieData = response.json();
  return movieData;
};
