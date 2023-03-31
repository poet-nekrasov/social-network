import React from "react";
import classes from './MyPosts.module.css';
import MyPostItem from "./MyPostItem/MyPostItem";

const MyPosts = (props) => {
    let myPostsList = props.myPosts.myPostsList.map(
        myPostItem => (
            <MyPostItem
                id={myPostItem.id}
                message={myPostItem.message}
                likesCount={myPostItem.likesCount}
                key={myPostItem.id}
            />
        )
    );

    let onUpdateMyNewPost = (event) => props.updateMyNewPost(event.target.value);
    let onAddMyPost = () => props.addMyPost();
    let onDeleteAllPosts = () => props.deleteAllPosts();

    return (

        <div className={ classes.myPosts }>

            <h3>My posts</h3>

            <textarea
                className={ classes.textArea}
                placeholder='Enter text is here'
                value={props.myPosts.values.currentPostText}
                onChange={onUpdateMyNewPost}
            />

            <button
                className={ classes.addButton}
                onClick={onAddMyPost}
            >
                {props.myPosts.values.addButton}
            </button>

            <button
                className={classes.deleteButton}
                onClick={onDeleteAllPosts}
            >
                {props.myPosts.values.deleteButton}
            </button>

            <div className={ classes.items }>
                {myPostsList}
            </div>

        </div>

    );

}

export default MyPosts;

