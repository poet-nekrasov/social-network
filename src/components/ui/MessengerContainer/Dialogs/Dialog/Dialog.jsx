import React from "react";
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

let Dialog = (props) => {
    let path = '/dialog/' + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Dialog;