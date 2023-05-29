import React from "react";
import classes from "./PopularMovie.module.css";
import { SwiperSlide } from "swiper/react";
const PopularMovie = ({ popularData }) => {
  const { id, title, bacdrop_path } = popularData;
  return (
    <>
      <SwiperSlide>
        <h3>{title}</h3>
      </SwiperSlide>
    </>
  );
};

export default PopularMovie;
