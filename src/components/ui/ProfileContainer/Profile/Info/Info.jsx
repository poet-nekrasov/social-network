import React from "react";
import classes from './Info.module.css';
import {Preloader} from "../../../../Preloader";

const Info = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.avatar}>
                <img src={props.profile.photos.small} alt='human'/>
            </div>

            <div className={classes.profileDescription}>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    );
}

export default Info;