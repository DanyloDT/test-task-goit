import { useDispatch } from "react-redux";
import { setDropdown } from "../../redux/Dropdown/slice";
import css from "./Dropdown.module.css";

const Dropdown = () => {
  const options = ["ALL", "FOLLOW", "FOLLOWING"];
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(setDropdown(event.target.value));
  };

  return (
    <div>
      <select className={css.select} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
