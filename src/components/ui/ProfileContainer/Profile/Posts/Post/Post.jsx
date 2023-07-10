import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div>
        <div>
          {props.id}
          {props.message}
          {props.likesCount}
        </div>

        <button
          className={classes.buttonDelete}
          onClick={props.handleDeletePost}
        >
          Delete post
        </button>
      </div>
    </div>
  );
};

export default Post;
