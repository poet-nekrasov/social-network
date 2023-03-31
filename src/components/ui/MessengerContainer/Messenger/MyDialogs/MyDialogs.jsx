import React from "react";
import MyDialog from "./MyDialog/MyDialog";
import classes from './MyDialogs.module.css'

let MyDialogs = (props) => {
    let componentsMyDialogs = props.myDialogs.myDialogsList.map(
        dialog => (
            <MyDialog id={dialog.id} name={dialog.name} key={dialog.id} />
        )
    );

    return (
        <div className={classes.myDialogs}>
            {componentsMyDialogs}
        </div>
    );
}

export default MyDialogs;