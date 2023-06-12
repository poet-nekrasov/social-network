import React from "react";
import classes from './Posts.module.css';
import PostItem from "./PostItem/PostItem";

const Posts = (props) => {
    let postsList = props.posts.postsList.map(
        postItem => (
            <PostItem
                id={postItem.id}
                message={postItem.message}
                likesCount={postItem.likesCount}
                key={postItem.id}
            />
        )
    );

    let handleUpdateInjectedText = (event) => props.updateInjectedText(event.target.value);
    let handleAddPost = () => props.addPost();
    let handleDeleteAllPosts = () => props.deleteAllPosts();

    return (
        <div className={classes.posts}>
            <h3>My posts</h3>

            <textarea
                className={classes.textArea}
                placeholder='Enter text is here'
                value={props.posts.values.injectedText}
                onChange={handleUpdateInjectedText}
            />

            <button
                className={classes.buttonAdd}
                onClick={handleAddPost}
            >
                {props.posts.values.buttonAdd}
            </button>

            <button
                className={classes.buttonDelete}
                onClick={handleDeleteAllPosts}
            >
                {props.posts.values.buttonDelete}
            </button>

            <div className={classes.items}>
                {postsList}
            </div>
        </div>
    );
}

export default Posts;

