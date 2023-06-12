import React from "react";
import classes from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={classes.postItem}>
            {props.id} {props.message} {props.likesCount}
        </div>
    );
}

export default PostItem;

