import React from "react";
import Header from "../../components/header/Header";
import PopularMovies from "../../components/popularMovies/PopularMovies";
import HeroSection from "../../components/heroSection/HeroSection";
import GenresMovies from "../../components/genresMovies/GenresMovies";
import { GenreMoviesContextProvider } from "../../context/GenreMoviesContext";
import Accordin from "../../components/accordin/Accordin";
const Home = () => {
  return (
    <>
      <Header />
      <PopularMovies />
      <HeroSection />
      <GenreMoviesContextProvider>
        <GenresMovies />
      </GenreMoviesContextProvider>
      <Accordin />
    </>
  );
};

export default Home;
