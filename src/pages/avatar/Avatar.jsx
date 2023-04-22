import React from "react";
import { useLoaderData } from "react-router-dom";
const Avatar = () => {
  const avatarData = useLoaderData();

  return <></>;
};

export default Avatar;

// loader function to get data for a discarded movie
export const loader = async () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=avatar-the-way-of-water`
  );
  const movieData = response.json();

  return movieData;
};
