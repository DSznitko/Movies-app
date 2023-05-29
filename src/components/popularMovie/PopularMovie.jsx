import React from "react";
import classes from "./PopularMovie.module.css";

/* SWIPER IMPORTS */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularMovie = ({ popularData }) => {
  const { id, title, bacdrop_path } = popularData;
  return <div>PopularMovie</div>;
};

export default PopularMovie;
