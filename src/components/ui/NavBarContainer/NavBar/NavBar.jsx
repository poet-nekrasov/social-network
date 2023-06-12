import React from "react";
import classes from './NavBar.module.css';
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar = (props) => {
    let componentsNavNames = props.navBar.navBarNames.map(
        nav => <NavBarItem name={nav.name} key={nav.id}/>
    );

    return (
        <nav className={classes.navBarNames}>
            {componentsNavNames}
        </nav>
    );
}

export default NavBar;

