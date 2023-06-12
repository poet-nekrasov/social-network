import React from "react";
import {
  addPost,
  deleteAllPosts,
  getSelectedProfile,
  updateInjectedText,
} from "../../../Redux/reducers/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile/Profile";
import withRouter from "../../../withRouter/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getSelectedProfile(this.props.router.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });
export default connect(mapStateToProps, {
  getSelectedProfile,
  updateInjectedText,
  addPost,
  deleteAllPosts,
})(withRouter(ProfileContainer));
