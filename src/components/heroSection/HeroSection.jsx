import React from "react";
import classes from "./HeroSevtion.module.css";
import AllDevices from "../../assets/images/movies-app-hero-section-img.png";

const heroSection = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.content}>
          <h3 className={classes.title}>
            <span className={classes.blue__bold}>Watch </span>
            everywhere
          </h3>
          <p className={classes.paragraph}>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV.
          </p>
        </div>
        <img className={classes.img} src={AllDevices} alt="all devices" />
      </section>
    </>
  );
};

export default heroSection;
