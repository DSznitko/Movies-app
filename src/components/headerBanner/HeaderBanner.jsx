import React from "react";
import Button from "../UI/Button";
import classes from "./HeaderBanner.module.css";
import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__content}>
        <h2 className={classes.banner__title}>
          Avatar <span className={classes.thin__title}>the way of water</span>
        </h2>
        <Button>
          <Link className={classes.cta} to={"/avatar"}>
            Read more
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeaderBanner;
