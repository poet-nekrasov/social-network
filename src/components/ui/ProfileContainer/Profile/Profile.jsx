import React from "react";
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <Info profile={props.profile.profile} />

      <Posts
        posts={props.profile.posts}
        updateInjectedText={props.updateInjectedText}
        addPost={props.addPost}
        deleteAllPosts={props.deleteAllPosts}
      />
    </div>
  );
};

export default Profile;
