import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo}
                 src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'
                 alt='not found'
            />

            <div className={classes.login}>
                {
                    props.isAuth
                    ? props.login
                    : <NavLink to={'/Login'}> Login </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;