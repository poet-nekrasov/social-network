import React from "react";
import styles from './Posts.module.css';
import PostItem from "./PostItem/PostItem";
import AddPostForm from "./AddPostForm/AddPostForm";

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

    let handleAddPost = (formData) => {
        props.addPost(formData.newPost);
    }

    let handleDeleteAllPosts = () => props.deleteAllPosts();
   
    return (
        <div className={styles.posts}>
            <h2>My posts</h2>

            <AddPostForm onSubmit={handleAddPost}/>

            <button
                className={styles.buttonDelete}
                onClick={handleDeleteAllPosts}
            >
                Delete all posts
            </button>

            <div className={styles.items}>
                {postsList}
            </div>
        </div>
    );
}

export default Posts;

