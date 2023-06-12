import React from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {
  let componentsMessages = props.messages.messagesList.map((message) => (
    <Message id={message.id} message={message.message} key={message.id} />
  ));

  let handleUpdateMessage = (event) => props.updateMessage(event.target.value);
  let handleSendMessage = () => props.sendMessage();
  let handleDeleteAllMessages = () => props.deleteAllMessages();

  return (
    <div className={classes.messages}>
      <div className={classes.messagesList}>{componentsMessages}</div>

      <div className={classes.events}>
        <textarea
          className={classes.textArea}
          onChange={handleUpdateMessage}
          value={props.messages.values.injectedMessage}
          placeholder="New message"
        />

        <button 
            className={classes.buttonSend} 
            onClick={handleSendMessage}
        >
          {props.messages.values.buttonSend}
        </button>

        <button
          className={classes.buttonDelete}
          onClick={handleDeleteAllMessages}
        >
          {props.messages.values.buttonDelete}
        </button>
      </div>
    </div>
  );
};

export default Messages;
