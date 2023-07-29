import { useEffect } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import { getTweetsThunk } from "./redux/operations";
import Tweets from "./components/Tweets/Tweets";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTweetsThunk());
  }, [dispatch]);

  return (
    <>
      <Tweets />
    </>
  );
}

export default App;
