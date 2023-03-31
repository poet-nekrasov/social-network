import React from "react";
import images from "../assets/images/images";

export class Preloader extends React.Component {
    render() {
        return (
            <div>
                <img src={images.preloader} alt='preloader'/>
            </div>
        );
    }
}

