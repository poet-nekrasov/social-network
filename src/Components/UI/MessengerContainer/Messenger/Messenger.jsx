import React from "react";
import styles from './Messenger.module.css';
import MyDialogs from "./MyDialogs/MyDialogs";
import MyMessages from "./MyMessages/MyMessages";

const Messenger = (props) => {

    return (

        <div className={styles.messenger}>

            <MyDialogs
                myDialogsList={props.myDialogs.myDialogsList}
            />

            <MyMessages
                myMessagesList={props.myMessages.myMessagesList}
                newMessageText={props.myMessages.values.newMessageText}
                sendButton={props.myMessages.values.sendButton}
                deleteButton={props.myMessages.values.deleteButton}

                updateMyNewMessage={props.updateMyNewMessage}
                sendMyNewMessage={props.sendMyNewMessage}
                deleteAllMyNewMessages={props.deleteAllMyNewMessages}
            />

        </div>

    );

}

export default Messenger;

