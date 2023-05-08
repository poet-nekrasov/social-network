import React from "react";
import classes from './Users.module.css';
import images from '../../../../assets/images/images';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let totalPagesAmount = Math.ceil(
        props.totalUsersAmount / props.inOnePageUsersAmount
    );
    let pagesNumbers = [];
    for (let i = 1; i <= totalPagesAmount; i++) {
        pagesNumbers.push(i);
    }

    let elementsPagination = pagesNumbers.map(num => {
            return (
                <span
                    className={num === props.currentPage ? classes.selected : undefined}
                    onClick={() => props.onSetCurrentPage(num)}
                >
                    {num}
                </span>
            );
        }
    );

    let elementsUsers = props.usersList.map(u => {

            return (

                <div key={u.id}>

                    <div>

                        <NavLink to={`/My Profile/${u.id}`}>

                            <img
                                className={classes.userAvatar}
                                src={u.photos.small !== null
                                    ? u.photos.small
                                    : images.defaultUserAvatar}
                                alt="avatar of user"
                            />

                        </NavLink>

                    </div>

                    <div>

                        {

                            u.followed === true

                            ?
                            <button
                                className={classes.unfollowButton}
                                onClick={() => props.onUnfollowFromUser(u.id)}
                                disabled={props.isFetchingFollow.some(id => id === u.id)}
                            >
                                {props.unfollowButtonValue}
                            </button>

                            :
                            <button
                                className={classes.followButton}
                                onClick={() => props.onFollowOnUser(u.id)}
                                disabled={props.isFetchingFollow.some(id => id === u.id)}
                            >
                                {props.followButtonValue}
                            </button>

                        }

                    </div>

                    <div className={classes.name}>
                        <NavLink to={`/My profile/${u.id}`}>
                            {u.name}
                        </NavLink>
                    </div>

                </div>
            );
        }
    );

    return (

        <div className={classes.usersPageWrapper}>

            <div className={classes.usersPagination}>
                {elementsPagination}
            </div>

            <div>
                {elementsUsers}
            </div>

        </div>
    );

}

export default Users;
