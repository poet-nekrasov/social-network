import React from "react";
import classes from './NavBarItem.module.css';
import {NavLink} from "react-router-dom";

const NavBarItem = (props) => {
    let path = '/' + props.name;

    return (
        <div className={ classes.navBarItem }>
            <NavLink to={path }>
                {props.name}
            </NavLink>
        </div>
    );
}

export default NavBarItem;