import React from "react";
import classes from "./Messages.module.css";
import Message from "./Message/Message";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const Messages = (props) => {
  let componentsMessages = props.messages.messagesList.map((message) => (
    <Message id={message.id} message={message.message} key={message.id} />
  ));

  let handleSendMessage = (formData) => {
    console.log(formData.newMessage);
    props.sendMessage(formData.newMessage);
  }

  let handleDeleteAllMessages = () => {
    props.deleteAllMessages();
  }
  
  return (
    <div className={classes.messages}>
      <div className={classes.messagesList}>{componentsMessages}</div>

      <div className={classes.events}>
        <SendMessageForm onSubmit={handleSendMessage}/>

        <button
          className={classes.buttonDelete}
          onClick={handleDeleteAllMessages}
        >
          Delete all messages
        </button>
      </div>
    </div>
  );
};

export default Messages;
