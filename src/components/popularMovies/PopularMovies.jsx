import React, { useState, useEffect } from "react";
import classes from "./PopularMovies.module.css";
import useFetchData from "../../hooks/useFetch";
import PopularMovie from "../popularMovie/PopularMovie";

/* SWIPER IMPORTS */
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const PopularMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [popular, setPopular] = useState([]);

  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  useEffect(() => {
    setPopular(data.results);
  }, [data]);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>
        <span className={classes.blue__bold}>Popular</span> Now
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {popular &&
          popular.map((movie) => (
            <PopularMovie key={movie.id} popularData={movie} />
          ))}
      </Swiper>
    </section>
  );
};

export default PopularMovies;
