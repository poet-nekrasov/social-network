import React from "react";
import {
    addMyPost,
    deleteAllPosts, setUserProfile,
    updateMyNewPost
} from "../../../Redux/reducers/myProfileReducer";
import {connect} from "react-redux";
import MyProfile from "./MyProfile/MyProfile";
import axios from "axios";

class MyProfileContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/11')
            .then(response => this.props.setUserProfile(response.data));
    }

    render() {

        return <MyProfile {...this.props}/>

    }

}

let mapStateToProps = (state) => ({myProfile: state.myProfilePage});
export default connect(mapStateToProps, {

    setUserProfile,

    updateMyNewPost,
    addMyPost,
    deleteAllPosts

})(MyProfileContainer);
