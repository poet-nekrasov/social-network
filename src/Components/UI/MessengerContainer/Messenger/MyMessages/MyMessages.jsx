import React from "react";
import styles from './MyMessages.module.css'
import MyMessage from "./MyMessage/MyMessage";

const MyMessages = (props) => {

    let componentsMyMessages = props.myMessagesList.map(
        message => <MyMessage id={message.id} message={message.message} key={message.id} />
    );

    let onUpdateMyNewMessage = (event) => {
        let text = event.target.value;
        props.updateMyNewMessage(text);
    }

    let onSendMyNewMessage = () => props.sendMyNewMessage();

    let onDeleteAllMyMessages = () => props.deleteAllMyNewMessages();

    return (

        <div className={styles.myMessages}>

            <div className={styles.myMessagesList}>
                { componentsMyMessages }
            </div>

            <div className={styles.events}>

                <textarea
                    className={styles.textArea}
                    onChange={onUpdateMyNewMessage}
                    value={props.newMessageText}
                    placeholder='New message text'
                />

                <button
                    className={styles.sendButton}
                    onClick={onSendMyNewMessage}
                >
                    {props.sendButton}
                </button>

                <button
                    className={styles.deleteButton}
                    onClick={onDeleteAllMyMessages}
                >
                    {props.deleteButton}
                </button>

            </div>

        </div>

    );

}

export default MyMessages;