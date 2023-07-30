import React from "react";
import Info from "./Info/Info";
import Posts from "./Posts/Posts";

const Profile = (props) => {
  return (
    <div>
      <Info
        status={props.status}
        profile={props.profile}
        updateProfileStatus={props.updateProfileStatus}
      />

      <Posts
        posts={props.posts}
        addPost={props.addPost}
        deleteAllPosts={props.deleteAllPosts}
      />
    </div>
  );
};

export default Profile;
