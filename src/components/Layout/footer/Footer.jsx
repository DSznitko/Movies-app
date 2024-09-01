import React from "react";
import classes from "./Footer.module.css";
import SocialMedia from "../../socialMedia/SocialMedia";
import Copyright from "../../copyright/Copyright";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialMedia />
      <Copyright />
      <p className={classes.footer__text}>This is just an showcase project</p>
    </footer>
  );
};

export default Footer;
