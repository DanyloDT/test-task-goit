import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTweetsThunk } from "../../redux/operations";
import Tweets from "../../components/Tweets/Tweets";
import LoadMore from "../../components/LoadMore/LoadMore";
import { selectTweets } from "../../redux/selector";

const TweetsPage = () => {
  const tweets = useSelector(selectTweets);
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
      <Tweets limitedTweets={limitedTweets} />
      {showBtn && <LoadMore onHandleLoadBtn={onHandleLoadBtn} />}
    </>
  );
};

export default TweetsPage;
