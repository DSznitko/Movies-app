import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import HeaderBanner from "../headerBaner/HeaderBanner";

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderBanner />
    </div>
  );
};

export default Header;
