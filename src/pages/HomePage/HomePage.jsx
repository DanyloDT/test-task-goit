import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome </h1>
        <p className={css.text}>
          The Tweets application is a simple client for viewing and managing
          tweets. You can view a list of tweets, follow and unfollow users.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
