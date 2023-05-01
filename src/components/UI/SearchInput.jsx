import React from "react";
import classes from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <div className={classes.input__wrapper}>
        <div className={classes.input__icon}>
          <BsSearch />
        </div>
        <input
          placeholder="Search Movie..."
          className={classes.search__input}
          type="text"
        />
      </div>
    </>
  );
};

export default SearchInput;
