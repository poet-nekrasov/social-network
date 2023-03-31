import React from "react";
import classes from './MyDialog.module.css';
import {NavLink} from "react-router-dom";

let MyDialog = (props) => {
    let path = '/myDialogs/' + props.id;

    return (
        <div className={classes.myDialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default MyDialog;