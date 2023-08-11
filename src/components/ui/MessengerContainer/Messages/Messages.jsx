import React from "react";
import styles from "./Messages.module.css";
import Message from "./Message/Message";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const Messages = (props) => {
    let componentsMessages = props.messagesList.map((message) => (
        <Message id={message.id} message={message.message} key={message.id} />
    ));

    let handleSendMessage = (formData) => {
        props.sendMessage(formData.newMessage);
    };

    let handleDeleteAllMessages = () => {
        props.deleteAllMessages();
    };

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>{componentsMessages}</div>

            <div className={styles.events}>
                <SendMessageForm onSubmit={handleSendMessage} />

                <button
                    className={styles.buttonDelete}
                    onClick={handleDeleteAllMessages}
                >
                    Delete all messages
                </button>
            </div>
        </div>
    );
};

export default Messages;
