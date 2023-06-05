import React from "react";
import {
    addMyPost,
    deleteAllPosts, currentUserProfile,
    updateMyNewPost
} from "../../../Redux/reducers/myProfileReducer";
import {connect} from "react-redux";
import MyProfile from "./MyProfile/MyProfile";
import withRouter from "../../../withRouter/withRouter";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.currentUserProfile(this.props.router.params.userId);
    }

    render() {
        return <MyProfile {...this.props}/>
    }
}



let mapStateToProps = (state) => ({myProfile: state.myProfilePage});
export default connect(mapStateToProps, {
    currentUserProfile,

    updateMyNewPost,
    addMyPost,
    deleteAllPosts
})(withRouter(MyProfileContainer));
