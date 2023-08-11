import React from "react";
import {
    deleteAllMessages,
    sendMessage,
} from "../../../Redux/reducers/messengerReducer";
import { connect } from "../../../../node_modules/react-redux/es/exports";
import compose from "../../../../node_modules/redux/src/compose";
import {
    getDialogsList,
    getMessagesList,
} from "../../../Redux/selectors/messengerSelectors";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import styles from './Messenger.module.css'

class MessengerContainer extends React.Component {
    render() {
        return (
            <div className={styles.messenger}>
                <Dialogs dialogsList={this.props.dialogsList} />

                <Messages
                    messagesList={this.props.messagesList}
                    sendMessage={this.props.sendMessage}
                    deleteAllMessages={this.props.deleteAllMessages}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    dialogsList: getDialogsList(state),
    messagesList: getMessagesList(state),
});

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        deleteAllMessages,
    })
)(MessengerContainer);
