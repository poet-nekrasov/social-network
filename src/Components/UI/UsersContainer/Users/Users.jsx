import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import * as axios from "axios";

const Users = (props) => {

    // if (props.users.length === 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //         props.setUsers(response.data.items)
    //     });
    // }

    let componentsUsers = props.users.map(u =>

        <User

            id={u.id}
            logo={u.logo}
            name={u.name}
            heading={u.heading}
            location={u.location}
            followed={u.followed}

            followOnUser={props.followOnUser}
            unfollowFromUser={props.unfollowFromUser}

        />

    );

    return (
        <div className={ styles.users }>
            { componentsUsers }
        </div>
    );

}

export default Users;