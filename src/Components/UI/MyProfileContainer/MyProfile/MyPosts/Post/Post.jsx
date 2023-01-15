import React from "react";
import styles from './Post.module.css';

const Post = (props) => {

    return (

        <div className={styles.post}>
            {props.id} {props.message} {props.likesCount}
        </div>

    );
}

export default Post;

