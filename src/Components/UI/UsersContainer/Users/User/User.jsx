import React from "react";
import styles from './User.module.css';

const User = (props) => {

    return (

        <div className={styles.user}>

            <div className={styles.logo}>
                <img
                    src={props.logo}
                    alt="face of user"
                />
            </div>

            <div className={styles.followed}>
                {
                    props.followed
                        ?
                        <button onClick={ props.unfollowFromUser(props.id) } className={ styles.buttonUnfollow }>
                            Unfollow
                        </button>
                        :
                        <button onClick={ props.followOnUser(props.id) } className={ styles.buttonFollow }>
                            Follow
                        </button>
                }
            </div>

            <div className={styles.name}>
                {props.name}
            </div>

            <div className={styles.heading}>
                {props.heading}
            </div>

            <div className={styles.country}>
                'Country'
            </div>

            <div className={styles.city}>
                'City'
            </div>

        </div>

    );

}

export default User;