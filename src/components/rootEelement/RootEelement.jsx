import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../topMenu/TopMenu";
import { MoviesProvider } from "../../context/MoviesContext";
import Footer from "../footer/Footer";

const RootElement = () => {
  return (
    <>
      <MoviesProvider>
        <TopMenu />
        <Outlet />
        <Footer />
      </MoviesProvider>
    </>
  );
};

export default RootElement;
