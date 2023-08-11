import React from "react";
import images from "../assets/images/images";
import styles from "./Preloader.module.css";

export class Preloader extends React.Component {
  render() {
    return (
      <div>
        <img
          className={styles.preloader}
          src={images.preloader}
          alt="preloader"
        />
      </div>
    );
  }
}
