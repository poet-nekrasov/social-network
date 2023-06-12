import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

let Dialog = (props) => {
    let path = '/dialog/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;