import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={css.header}>
      <nav className={css.container}>
        <NavLink className={css.navLink} to="/">
          HOME
        </NavLink>

        <NavLink className={css.navLink} to="/tweets">
          TWEETS
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
