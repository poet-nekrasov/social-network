import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let myPostsList = props.myPostsList.map(
        post => (
            <Post
                id={post.id}
                message={post.message}
                likesCount={post.likesCount}
                key={post.id}
            />
        )
    );

    let onUpdateMyNewPost = (event) => {
        let text = event.target.value;
        props.updateMyNewPostText(text);
    }

    let onAddMyNewPost = () => props.addMyNewPost();

    let onDeleteAllMyPosts = () => props.deleteAllMyPosts();

    return (

        <div className={styles.myPosts}>

            <h3>My posts</h3>

            <textarea
                className={styles.textArea}
                placeholder='New post text'
                value={props.newPostText}
                onChange={onUpdateMyNewPost}
            />

            <button
                className={styles.addButton}
                onClick={onAddMyNewPost}
            >
                {props.addButton}
            </button>

            <button
                className={styles.deleteButton}
                onClick={onDeleteAllMyPosts}
            >
                {props.deleteButton}
            </button>

            <div className={styles.items}>
                { myPostsList }
            </div>

        </div>

    );

}

export default MyPosts;

