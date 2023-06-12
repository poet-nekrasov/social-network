import React from "react";
import classes from "./Messenger.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

let Messenger = (props) => {
  return (
    <div className={classes.messenger}>
      <Dialogs dialogs={props.messenger.dialogs} />

      <Messages
        messages={props.messenger.messages}
        updateMessage={props.updateMessage}
        sendMessage={props.sendMessage}
        deleteAllMessages={props.deleteAllMessages}
      />
    </div>
  );
};

export default Messenger;
