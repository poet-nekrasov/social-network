import React from "react";
import classes from "./Users.module.css";
import images from "../../../../assets/images/images";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesAmount = Math.ceil(props.usersAmount / props.onePageUsersAmount);
  let numbers = [];
  for (let i = 1; i <= pagesAmount; i++) {
    numbers.push(i);
  }

  let pagination = numbers.map((num) => {
    return (
      <span
        className={num === props.selectedPage ? classes.selected : undefined}
        onClick={() => props.handleGetUsers(num)}
      >
        {num}
      </span>
    );
  });

  let elementsUsers = props.usersList.map((u) => {
    return (
      <div className={classes.user} key={u.id}>
        <div>
          <NavLink to={`/Profile/${u.id}`}>
            <img
              className={classes.userAvatar}
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
              className={classes.unfollow}
              onClick={() => props.handleUnfollow(u.id)}
              disabled={props.idUsers.some((id) => id === u.id)}
            >
              {props.buttonUnfollow}
            </button>
          ) : (
            <button
              className={classes.follow}
              onClick={() => props.handleFollow(u.id)}
              disabled={props.idUsers.some((id) => id === u.id)}
            >
              {props.buttonFollow}
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{pagination}</div>
      <div>{elementsUsers}</div>
    </div>
  );
};

export default Users;
