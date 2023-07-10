import React from "react";
import {
  deleteAllMessages,
  sendMessage,
  updateMessage,
} from "../../../Redux/reducers/messengerReducer";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import Messenger from "./Messenger/Messenger";
import { withRedirect } from "../../hoc/withRedirect";
import compose from "../../../../node_modules/redux/src/compose";

class MessengerContainer extends React.Component {
  render() {
    return <Messenger {...this.props} />;
  } 
}


let mapStateToProps = (state) => ({ messenger: state.messengerPage });

export default compose(
  connect(mapStateToProps, {
    updateMessage,
    sendMessage,
    deleteAllMessages,
  }),
  
  // withRedirect,
)(MessengerContainer)