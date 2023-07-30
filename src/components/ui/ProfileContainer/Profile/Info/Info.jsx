import React from "react";
import classes from "./Info.module.css";
import { Preloader } from "../../../../Preloader";
import UserStatus from "./UserStatus/UserStatus";

const Info = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.avatar}>
        <img src={props.profile.photos.small} alt="human" />
      </div>

      <div className={classes.profileDescription}>
        <UserStatus
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
        />

        <div>{props.profile.fullName}</div>

        <div>{props.profile.lookingForAJobDescription}</div>
      </div>
    </div>
  );
};

export default Info;
