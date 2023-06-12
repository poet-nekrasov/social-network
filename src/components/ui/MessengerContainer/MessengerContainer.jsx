import React from "react";
import {
  deleteAllMessages,
  sendMessage,
  updateMessage,
} from "../../../Redux/reducers/messengerReducer";
import { connect } from "react-redux";
import Messenger from "./Messenger/Messenger";

class MessengerContainer extends React.Component {
  render() {
    return <Messenger {...this.props} />;
  }
}

let mapStateToProps = (state) => ({ messenger: state.messengerPage });
export default connect(mapStateToProps, {
  updateMessage,
  sendMessage,
  deleteAllMessages,
})(MessengerContainer);
