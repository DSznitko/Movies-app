import React from "react";
import classes from "./SocialMedia.module.css";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
const SocialMedia = () => {
  return (
    <ul className={classes.socialMedia}>
      <li className={classes.socialMediaItem__fb}>
        <BsFacebook />
      </li>
      <li className={classes.socialMediaItem__insta}>
        <BsInstagram />
      </li>
      <li className={classes.socialMediaItem__tiktok}>
        <BsTiktok />
      </li>
    </ul>
  );
};

export default SocialMedia;
