import React from "react";
import {
  addPost,
  deleteAllPosts,
  getSelectedProfile,
  updateInjectedText,
} from "../../../Redux/reducers/profileReducer";
import Profile from "./Profile/Profile";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import withRouter from "../../../withRouter/withRouter";
import { withRedirect } from "../../hoc/withRedirect";
import compose from "../../../../node_modules/redux/src/compose";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getSelectedProfile(this.props.router.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({ profile: state.profilePage });

export default compose(
  connect(mapStateToProps, {
    getSelectedProfile,
    updateInjectedText,
    addPost,
    deleteAllPosts
  }),

  withRouter,

  // withRedirect,
)(ProfileContainer)

