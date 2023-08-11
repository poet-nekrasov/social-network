import React from "react";
import styles from "./UsersList.module.css";
import { NavLink } from "../../../../../../node_modules/react-router-dom/dist/index";
import images from "../../../../../assets/images/images";

export const UsersList = (props) => {
    let usersList = props.usersList.map((u) => {
        return (
            <div className={styles.user} key={u.id}>
                <div>
                    <NavLink to={`/Profile/${u.id}`}>
                        <img
                            className={styles.userAvatar}
                            src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : images.defaultUserAvatar
                            }
                            alt="avatar of user"
                        />
                    </NavLink>
                </div>

                <div>
                    <NavLink to={`/Profile/${u.id}`}>{u.name}</NavLink>
                </div>

                <div>
                    {u.followed === true ? (
                        <button
                            className={styles.unfollow}
                            onClick={() => props.deleteSub(u.id)}
                            disabled={props.usersIdProgressInSub.some(
                                (id) => id === u.id
                            )}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className={styles.follow}
                            onClick={() => props.setSub(u.id)}
                            disabled={props.usersIdProgressInSub.some(
                                (id) => id === u.id
                            )}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </div>
        );
    });

    return <div>{usersList}</div>;
};
