import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../Layout/topMenu/TopMenu";
import { MoviesProvider } from "../../context/MoviesContext";
import Footer from "../Layout/footer/Footer";

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
