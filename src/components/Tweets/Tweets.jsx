import { useSelector } from "react-redux";
import { selectFollowing, selectTweets } from "../../redux/selector";
import css from "./Tweets.module.css";
import Logo from "../../images/logo.svg";

const Tweets = () => {
  const tweets = useSelector(selectTweets);
  const isFollowing = useSelector(selectFollowing);
  console.log(tweets);
  return (
    <ul className={css.list}>
      {tweets.map(({ avatar, followers, id, tweets, user }) => {
        return (
          <li key={id} className={css.item}>
            <div className={css.picture}>
              <svg width={"76px"} height={"22px"} className={css.logo}>
                <use href={Logo} />
              </svg>
            </div>

            <div className={css.blockAvatar}>
              <spa className={css.line}></spa>
              <div className={css.divAvatar}>
                <img className={css.avatar} src={avatar} alt={user} />
              </div>
            </div>
            <p className={`${css.text} ${css.tweets}`}>{`${tweets} tweets`}</p>
            <p
              className={`${css.text} ${css.followers}`}
            >{`${followers} followers`}</p>
            <button className={css.button}>
              {isFollowing ? "Follow" : "Following"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tweets;
