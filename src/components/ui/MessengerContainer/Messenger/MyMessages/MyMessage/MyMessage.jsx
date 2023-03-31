import React from "react";
import classes from './MyMessage.module..css';

const MyMessage = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

export default MyMessage;