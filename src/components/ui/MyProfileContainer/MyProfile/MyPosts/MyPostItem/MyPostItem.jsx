import React from "react";
import classes from './MyPostItem.module.css';

const MyPostItem = (props) => {
    return (
        <div className={ classes.myPostItem }>
            {props.id} {props.message} {props.likesCount}
        </div>
    );
}

export default MyPostItem;

