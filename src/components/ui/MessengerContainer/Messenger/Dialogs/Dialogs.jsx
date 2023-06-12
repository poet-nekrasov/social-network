import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";

let Dialogs = (props) => {
  let componentsDialogs = props.dialogs.dialogsList.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} key={dialog.id} />
  ));

  return <div className={classes.dialogs}>{componentsDialogs}</div>;
};

export default Dialogs;
