import React from "react";
import styles from './NavBar.module.css';
import Item from "./Item/Item";

const NavBar = (props) => {

    let componentsNavNames = props.navBarNames.map(
        nav => <Item name={nav.name} key={nav.id}/>
    );

    return (
        <nav className={styles.navBarNames}>
            { componentsNavNames }
        </nav>
    );

}

export default NavBar;

