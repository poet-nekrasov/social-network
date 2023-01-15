import React from "react";
import Info from "./Info/Info";
import MyPosts from "./MyPosts/MyPosts";


const MyProfile = (props) => {

    return (

        <div>

            <Info/>

            <MyPosts
                myPostsList={props.myPosts.myPostsList}
                newPostText={props.myPosts.values.newPostText}
                addButton={props.myPosts.values.addButton}
                deleteButton={props.myPosts.values.deleteButton}

                updateMyNewPostText={props.updateMyNewPostText}
                addMyNewPost={props.addMyNewPost}
                deleteAllMyPosts={props.deleteAllMyPosts}
            />

        </div>

    );

}

export default MyProfile;