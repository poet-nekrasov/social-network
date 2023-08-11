import React from "react";
import styles from './PostItem.module.css';

const PostItem = (props) => {
    return (
        <div className={styles.postItem}>
            {props.id} {props.message} {props.likesCount}
        </div>
    );
}

export default PostItem;

