import React from "react";
import styles from './MyMessage.module..css';

const MyMessage = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
}

export default MyMessage;