import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../topMenu/TopMenu";

const RootElement = () => {
  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  );
};

export default RootElement;
