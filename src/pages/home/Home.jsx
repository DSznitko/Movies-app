import React from "react";
import Header from "../../components/header/Header";
import PopularMovies from "../../components/popularMovies/PopularMovies";
import HeroSection from "../../components/heroSection/HeroSection";
import GenresMovies from "../../components/genresMovies/GenresMovies";
const Home = () => {
  return (
    <>
      <Header />
      <PopularMovies />
      <HeroSection />
      <GenresMovies />
    </>
  );
};

export default Home;
