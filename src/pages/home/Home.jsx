import React from "react";
import Header from "../../components/header/Header";
import PopularMovies from "../../components/popularMovies/PopularMovies";
import HeroSection from "../../components/heroSection/HeroSection";
const Home = () => {
  return (
    <>
      <Header />
      <PopularMovies />
      <HeroSection />
    </>
  );
};

export default Home;
