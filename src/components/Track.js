import React from "react";
import styles from "./Track.module.css";

export default function Track({ trackObject }) {

  return (
    <div className={styles.wrapper}>
      <h4>
        Artist: {trackObject.artist}
        <br />
        Song: {trackObject.song}
      </h4>
    </div>
  );
}
