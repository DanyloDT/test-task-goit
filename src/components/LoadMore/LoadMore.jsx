import PropTypes from "prop-types";
import css from "./LoadMore.module.css";

const LoadMore = ({ onHandleLoadBtn }) => {
  return (
    <button onClick={onHandleLoadBtn} className={css.button}>
      Load More
    </button>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  onHandleLoadBtn: PropTypes.func.isRequired,
};
