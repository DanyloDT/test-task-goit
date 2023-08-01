import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink className={css.logo} to="/">
          <span>TWEETS</span>
        </NavLink>

        <nav>
          <NavLink className={css.navLink} to="/tweets">
            Tweets
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
