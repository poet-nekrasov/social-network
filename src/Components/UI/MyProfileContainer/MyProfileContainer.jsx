import {
    addMyPostActionCreator,
    deleteAllMyPostsActionCreator,
    updateMyNewPostActionCreator
} from "../../../Redux/reducers/myProfileReducer";
import {connect} from "react-redux";
import MyProfile from "./MyProfile/MyProfile";

let mapStateToProps = (state) => ({myPosts: state.myProfilePage.myPosts});

let mapDispatchToProps = (dispatch) => ({
    updateMyNewPostText: (text) => dispatch(updateMyNewPostActionCreator(text)),
    addMyNewPost: () => dispatch(addMyPostActionCreator()),
    deleteAllMyPosts: () => dispatch(deleteAllMyPostsActionCreator())
});

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile);

export default MyProfileContainer;