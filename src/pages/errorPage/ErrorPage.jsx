import React from "react";
import { useRouteError, Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import Button from "../../components/UI/Button";

const ErrorPage = () => {
  const error = useRouteError();

  let errorTitle = "an error occurred!!";
  let errorMessage = "Ups! Something went wrong";

  if (error.status === 500) {
    errorMessage = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    errorTitle = "Content not found!";
    errorMessage = "Coul not find page!";
  }

  return (
    <>
      <div className={classes.error__modal}>
        <div className={classes.error__content}>
          <h1 className={classes.error__title}>{errorTitle}</h1>
          <span className={classes.error__message}>{errorMessage}</span>
          <Link to="/">
            <Button>Home page</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
