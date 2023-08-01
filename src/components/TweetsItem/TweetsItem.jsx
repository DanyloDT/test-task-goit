import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../images/logo.svg";

import css from "./TweetsItem.module.css";
import Button from "../Button/Button";
import formattedValue from "../../config/formattedFollowers";

const TweetsItem = ({
  avatar,
  followers,
  id,
  tweets,
  user,
  isFollowing = false,
}) => {
  return (
    <li className={css.item}>
      <div className={css.picture}>
        <svg width={"76px"} height={"22px"} className={css.logo}>
          <Logo />
        </svg>
      </div>

      <div className={css.blockAvatar}>
        <span className={css.line}></span>
        <div className={css.divAvatar}>
          <img className={css.avatar} src={avatar} alt={user} />
        </div>
      </div>
      <p className={`${css.text} ${css.tweets}`}>{`${formattedValue(
        tweets
      )} tweets`}</p>
      <p className={`${css.text} ${css.followers}`}>{`${formattedValue(
        followers
      )} followers`}</p>
      <Button followers={followers} id={id} isFollowing={isFollowing} />
    </li>
  );
};

export default TweetsItem;

TweetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool,
};
