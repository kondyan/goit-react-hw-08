import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setContactFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const value = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBoxWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(setContactFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
