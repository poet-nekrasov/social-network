import React from "react";
import Dialog from "./Dialog/Dialog";
import styles from "./Dialogs.module.css";

let Dialogs = (props) => {
  let componentsDialogs = props.dialogsList.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} key={dialog.id} />
  ));

  return <div className={styles.dialogs}>{componentsDialogs}</div>;
};

export default Dialogs;
