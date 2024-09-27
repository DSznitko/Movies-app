import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../Layout/topMenu/TopMenu";
import { MoviesProvider } from "../../context/MoviesContext";
import Footer from "../Layout/footer/Footer";
import { Toaster } from "react-hot-toast";

const RootElement = () => {
  return (
    <>
      <MoviesProvider>
        <Toaster />
        <TopMenu />
        <Outlet />
        <Footer />
      </MoviesProvider>
    </>
  );
};

export default RootElement;
