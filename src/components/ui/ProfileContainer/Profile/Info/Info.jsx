import React from "react";
import styles from "./Info.module.css";
import { Preloader } from "../../../../Preloader";
import { UserStatus } from "./UserStatus/UserStatus";

const Info = (props) => {
    return props.profile ? (
        <div>
            <div className={styles.avatar}>
                <img src={props.profile.photos.small} alt="human" />
            </div>

            <div className={styles.profileDescription}>
                <UserStatus
                    status={props.profile.userId} // Статус не предусмотрен API, поэтому выводим userId
                    updateProfileStatus={props.updateProfileStatus}
                />

                <div>{props.profile.fullName}</div>

                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    ) : (
        <Preloader />
    );
};

export default Info;
