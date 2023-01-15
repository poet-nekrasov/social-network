import React from "react";
import styles from './Header.module.css';

const Header = () => {

    return (

        <header className={styles.header}>

        <img className={styles.logo}
            src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'
            alt='not found'
        />

        </header>

    );

}

export default Header;