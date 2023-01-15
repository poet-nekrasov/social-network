import React from "react";
import MyDialog from "./MyDialog/MyDialog";
import styles from './MyDialogs.module.css'

const MyDialogs = (props) => {

    let componentsMyDialogs = props.myDialogsList.map(
        dialog => <MyDialog id={dialog.id} name={dialog.name} key={dialog.id} />
    );

    return (
        <div className={styles.myDialogs}>
            { componentsMyDialogs }
        </div>
    );

}

export default MyDialogs;