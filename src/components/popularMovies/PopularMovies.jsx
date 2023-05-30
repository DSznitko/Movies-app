import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import classes from "./PopularMovies.module.css";
import useFetchData from "../../hooks/useFetch";
import { FaHeart } from "react-icons/fa";
import MoviesContext from "../../context/MoviesContext";
import useWidnowWidth from "../../hooks/useWidnowWidth";

/* SWIPER IMPORTS */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const PopularMovies = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [popular, setPopular] = useState([]);
  const { addFavMovieHandler } = useContext(MoviesContext);
  const { width } = useWidnowWidth();
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  useEffect(() => {
    setPopular(data.results);
  }, [data]);

  /* Show slides function */
  const slidesPerViewHandler = useMemo(() => {
    if (width < 1400 && width > 768) {
      return 3;
    }
    if (width < 768) {
      return 1;
    } else {
      return 4;
    }
  }, [width]);

  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>
        <span className={classes.blue__bold}>Popular</span> Now
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={slidesPerViewHandler}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
        }}
        className={classes.swiper}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {popular &&
          popular.map((movie) => (
            <SwiperSlide className={classes.slide} key={movie.id}>
              <h3 className={classes.movie__title}>{movie.title}</h3>
              <Link to={`/${movie.id}`}>
                <img
                  className={classes.img}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <div className={classes.stats__add}>
                <span className={classes.popularity}>
                  <span className={classes.vote}>Vote Count:</span>
                  {movie.vote_count}
                </span>
                <button
                  onClick={() => addFavMovieHandler(movie)}
                  className={classes.add}
                >
                  add to fav <FaHeart className={classes.heart} />
                </button>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default PopularMovies;
