import classes from "./SearchInput.module.css";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ setSearchValue }) => {
  return (
    <>
      <div className={classes.input__wrapper}>
        <div className={classes.input__icon}>
          <BsSearch />
        </div>
        <input
          onChange={setSearchValue}
          placeholder="Search Movie..."
          className={classes.search__input}
          type="search"
        />
      </div>
    </>
  );
};

export default SearchInput;
