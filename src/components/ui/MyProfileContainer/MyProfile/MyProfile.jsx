import React from "react";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";

const MyProfile = (props) => {
    return (
        <div>
            <Info profile={props.myProfile.profile}/>

            <MyPosts
                myPosts={props.myProfile.myPosts}
                updateMyNewPost={props.updateMyNewPost}
                addMyPost={props.addMyPost}
                deleteAllPosts={props.deleteAllPosts}
            />
        </div>
    );
}

export default MyProfile;