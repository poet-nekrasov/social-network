import React from "react";
import styles from './Info.module.css';

const Info = () => {

    return (

        <div className={styles.info}>

            <div className={styles.avatar}>

                <img
                    className={styles.myPhoto}
                    src="https://i.ytimg.com/vi/96JoHjfVGBA/maxresdefault.jpg"
                    alt="Star Platinum"
                />

            </div>

            <div className={styles.myProfileDescription}>
                Description of my profile
            </div>

        </div>

    );

}

export default Info;