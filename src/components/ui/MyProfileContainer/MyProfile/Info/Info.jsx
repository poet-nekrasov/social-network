import React from "react";
import classes from './Info.module.css';
import {Preloader} from "../../../../Preloader";

const Info = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div className={classes.info}>

            <div className={classes.avatar}>
                <img src={props.profile.photos.small} alt='human'/>
            </div>

            <div className={classes.myProfileDescription}>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>

        </div>

    );

}

export default Info;