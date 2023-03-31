import React from "react";
import classes from './MyMessages.module.css'
import MyMessage from "./MyMessage/MyMessage";

const MyMessages = (props) => {
    let componentsMyMessages = props.myMessages.myMessagesList.map(
        message => <MyMessage id={message.id} message={message.message} key={message.id} />
    );

    let onUpdateMyNewMessage = (event) => props.updateMyNewMessage(event.target.value);
    let onSendMyMessage = () => props.sendMyMessage();
    let onDeleteAllMyMessages = () => props.deleteAllMyMessages();

    return (
        <div className={classes.myMessages}>
            <div className={classes.myMessagesList}>
                {componentsMyMessages}
            </div>

            <div className={classes.events}>
                <textarea
                    className={classes.textArea}
                    onChange={onUpdateMyNewMessage}
                    value={props.myMessages.values.currentMessageText}
                    placeholder='New message text'
                />

                <button
                    className={classes.sendButton}
                    onClick={onSendMyMessage}
                >
                    {props.myMessages.values.sendButton}
                </button>

                <button
                    className={classes.deleteButton}
                    onClick={onDeleteAllMyMessages}
                >
                    {props.myMessages.values.deleteButton}
                </button>
            </div>
        </div>
    );
}

export default MyMessages;