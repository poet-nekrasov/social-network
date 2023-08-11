import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const handleLogOut = () => props.logOut();

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
        alt="not found"
      />

      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>

            <button className={styles.logOut} onClick={handleLogOut}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink to={"/Login"}> Login </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
