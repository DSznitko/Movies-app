import React from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./Avatar.module.css";
import avatarCastData from "../../data/avatarCastData";
import AvatarActor from "../../components/avatarActor/AvatarActor";
import useVoteColor from "../../hooks/useVoteColor";

const Avatar = () => {
  const avatarData = useLoaderData();
  const { voteColor } = useVoteColor();

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
            <strong className={classes.strong}>Relase date:</strong>
            {release_date}
          </span>
          <span
            className={`${classes.vote__average} ${voteColor(vote_average)}`}
          >
            {vote_average.toFixed(1)}
          </span>
        </div>
        <section className={classes.movie__description}>
          <p className={classes.description}>
            <strong className={classes.strong}>Movie description: </strong>
            {overview}
          </p>
        </section>
        <section className={classes.avatar__cast}>
          <h2 className={classes.cast__title}>
            <strong className={classes.strong}>Main </strong>Cast:
          </h2>
          <ul className={classes.actors__list}>
            {avatarCastData.map((actor) => {
              return (
                <AvatarActor
                  key={actor.id}
                  name={actor.actorName}
                  img={actor.img}
                />
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Avatar;
const api_key = process.env.REACT_APP_API_KEY;

// loader function to get data for discarded movie
export const loader = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=avatar-the-way-of-water`
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch the movie" }),
      {
        status: 500,
      }
    );
  } else {
    const movieData = response.json();
    return movieData;
  }
};
