import classes from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ setSesrchValue, searchValue }) => {
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
          value={searchValue}
        />
      </div>
    </>
  );
};

export default SearchInput;
