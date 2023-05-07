import React from "react";
import {
    addMyPost,
    deleteAllPosts, setUserProfile,
    updateMyNewPost
} from "../../../Redux/reducers/myProfileReducer";
import {connect} from "react-redux";
import MyProfile from "./MyProfile/MyProfile";
import withRouter from "../../../withRouter/withRouter";
import {apiSetUserProfile} from "../../../api/api";

class MyProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        apiSetUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })

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

})(withRouter(MyProfileContainer));
