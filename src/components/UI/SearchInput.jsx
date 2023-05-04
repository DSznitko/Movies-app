import React, { useState } from "react";
import classes from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";
import useFetchData from "../../hooks/useFetch";

const SearchInput = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [searchValue, setSesrchValue] = useState("");
  const { data } = useFetchData(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchValue}`
  );

  let movies = data.results;
  return (
    <>
      <div className={classes.input__wrapper}>
        <div className={classes.input__icon}>
          <BsSearch />
        </div>
        <input
          onChange={(e) => {
            setSesrchValue(e.target.value);
          }}
          placeholder="Search Movie..."
          className={classes.search__input}
          type="search"
        />
      </div>
    </>
  );
};

export default SearchInput;
