import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/Tweets/selector";
import { putTweetsThunk } from "../../redux/Tweets/operations";
import css from "./Button.module.css";

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
      className={`${css.button} ${!isFollowing ? css.follow : css.following}  `}
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
