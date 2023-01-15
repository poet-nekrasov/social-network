import React from "react";
import styles from './Item.module.css';
import {NavLink} from "react-router-dom";

const Item = (props) => {

    let path = '/' + props.name;

    return (

        <div className={styles.item}>

            <NavLink to={path}>
                {props.name}
            </NavLink>

        </div>

    );

}

export default Item;