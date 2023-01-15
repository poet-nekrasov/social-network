import React from "react";
import styles from './MyDialog.module.css';
import {NavLink} from "react-router-dom";

const MyDialog = (props) => {

    let path = '/myDialogs/' + props.id;

    return (
        <div className={styles.myDialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );

}

export default MyDialog;