import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../topMenu/TopMenu";
import { MoviesProvider } from "../../context/MoviesContext";

const RootElement = () => {
  return (
    <>
      <MoviesProvider>
        <TopMenu />
        <Outlet />
      </MoviesProvider>
    </>
  );
};

export default RootElement;
