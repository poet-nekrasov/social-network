import React from "react";
import classes from './Messenger.module.css';
import MyDialogs from "./MyDialogs/MyDialogs";
import MyMessages from "./MyMessages/MyMessages";

let Messenger = (props) => {
    return (
        <div className={classes.messenger}>
            <MyDialogs
                myDialogs={props.messenger.myDialogs}
            />

            <MyMessages
                myMessages={props.messenger.myMessages}
                updateMyNewMessage={props.updateMyNewMessage}
                sendMyMessage={props.sendMyMessage}
                deleteAllMyMessages={props.deleteAllMyMessages}
            />
        </div>
    );
}

export default Messenger;

