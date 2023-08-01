import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTweetsThunk } from "../../redux/Tweets/operations";
import Tweets from "../../components/Tweets/Tweets";
import LoadMore from "../../components/LoadMore/LoadMore";
import Dropdown from "../../components/Dropdown/Dropdown";
import { selectDropdownFilter } from "../../redux/Dropdown/select";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import css from "./TweetsPage.module.css";

const TweetsPage = () => {
  const tweets = useSelector(selectDropdownFilter);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(3);
  const limitedTweets = tweets.slice(0, limit);

  useEffect(() => {
    dispatch(getTweetsThunk());
  }, [dispatch]);

  const onHandleLoadBtn = () => {
    setLimit((prev) => prev + 3);
  };
  const showBtn = tweets.length > limit;

  return (
    <>
      <div className={css.div}>
        <Link className={css.button} to="/">
          <BsArrowLeft /> BACK
        </Link>
        <Dropdown />
      </div>
      <Tweets limitedTweets={limitedTweets} />
      {showBtn && <LoadMore onHandleLoadBtn={onHandleLoadBtn} />}
    </>
  );
};

export default TweetsPage;
