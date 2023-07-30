import React from "react";
import {
  addPost,
  deleteAllPosts,
  getSelectedProfile,
  updateProfileStatus,
  getProfileStatus,
} from "../../../Redux/reducers/profileReducer";
import Profile from "./Profile/Profile";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import withRouter from "../../../withRouter/withRouter";
// import { withRedirect } from "../../hoc/withRedirect";
import compose from "../../../../node_modules/redux/src/compose";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getSelectedProfile(this.props.router.params.userId);
    this.props.getProfileStatus(3);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  posts: state.profilePage.posts,
});

export default compose(
  connect(mapStateToProps, {
    getSelectedProfile,
    getProfileStatus,
    updateProfileStatus,
    addPost,
    deleteAllPosts,
  }),

  withRouter

  // withRedirect,
)(ProfileContainer);
