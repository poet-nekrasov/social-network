import React from "react";
import styles from "./NavBarItem.module.css";
import { NavLink } from "react-router-dom";

const NavBarItem = (props) => {
  let composePath = "/" + props.name;

  return (
    <div>
      <div className={styles.point}>
        <NavLink to={composePath}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default NavBarItem;
