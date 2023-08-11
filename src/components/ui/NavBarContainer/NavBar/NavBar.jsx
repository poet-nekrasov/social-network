import React from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar = (props) => {
  let componentsNavNames = props.navBarNames.map((nav) => (
    <NavBarItem key={nav.id} name={nav.name} />
  ));

  return <nav className={styles.navBarNames}>{componentsNavNames}</nav>;
};

export default NavBar;
