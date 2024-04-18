import React from "react";
import classes from "./Footer.module.css";
import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
