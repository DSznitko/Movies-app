import React from "react";
import classes from "./AvatarActor.module.css";

const AvatarActor = (props) => {
  const { name, img } = props;
  console.log(img);
  return (
    <div className={classes.actor__content}>
      <img className={classes.actor__img} src={img} alt={name + "image"} />
      <span className={classes.actor__name}>{name}</span>
    </div>
  );
};

export default AvatarActor;
