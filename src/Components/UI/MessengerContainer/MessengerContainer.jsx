import {
    deleteAllMyMessagesActionCreator,
    sendMyMessageActionCreator,
    updateMyNewMessageActionCreator
} from "../../../Redux/reducers/messengerReducer";
import {connect} from "react-redux";
import Messenger from "./Messenger/Messenger";

let mapStateToProps = (state) => ({
        myDialogs: state.messengerPage.myDialogs,
        myMessages: state.messengerPage.myMessages
});

let mapDispatchToProps = (dispatch) => ({
        updateMyNewMessage: (text) => dispatch(updateMyNewMessageActionCreator(text)),
        sendMyNewMessage: () => dispatch(sendMyMessageActionCreator()),
        deleteAllMyNewMessages: () => dispatch(deleteAllMyMessagesActionCreator())
});

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger);

export default MessengerContainer;




