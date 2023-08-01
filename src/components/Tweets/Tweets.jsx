import PropTypes from "prop-types";
import css from "./Tweets.module.css";

import TweetsItem from "../TweetsItem/TweetsItem";

const Tweets = ({ limitedTweets }) => {
  return (
    <ul className={css.list}>
      {limitedTweets.map((item) => {
        return <TweetsItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default Tweets;

Tweets.propTypes = {
  limitedTweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      tweets: PropTypes.number.isRequired,
    })
  ).isRequired,
};
