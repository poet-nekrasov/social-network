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
import compose from "../../../../node_modules/redux/src/compose";
import { getUserAuthId, getPosts, getProfile, getStatus } from "../../../Redux/selectors/profileSelectors";
import { withRedirect } from "../../hoc/withRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getSelectedProfile(this.props.router.params.userId);
    this.props.getProfileStatus(11);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  posts: getPosts(state),
  userAuthId: getUserAuthId(state),
});

export default compose(
  connect(mapStateToProps, {
    getSelectedProfile,
    getProfileStatus,
    updateProfileStatus,
    addPost,
    deleteAllPosts,
  }),

  withRouter,

  withRedirect
)(ProfileContainer);
