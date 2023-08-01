import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import css from "./Button.module.css";
import { putTweetsThunk } from "../../redux/operations";
import { selectLoading } from "../../redux/selector";

const Button = ({ followers, id, isFollowing }) => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleFollowing = () => {
    dispatch(
      putTweetsThunk({ id, followers: followers + 1, isFollowing: true })
    );
  };

  const handleFollow = () => {
    dispatch(
      putTweetsThunk({ id, followers: followers - 1, isFollowing: false })
    );
  };

  return (
    <button
      className={css.button}
      onClick={isFollowing ? handleFollow : handleFollowing}
      disabled={loading}
    >
      {!isFollowing ? `Follow` : `Following`}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
