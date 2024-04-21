import React from "react";
import styles from "./Tracklist.module.css";
import Track from "./Track";

export default function Tracklist({ tracksData, buttonFunction, signage }) {


  return (

    <div className={styles.wrapper}>
      <h3>Tracks</h3>

      {
        tracksData.length > 0 ?
          tracksData.map((trackObject, index) => {

            return (
              <div key={trackObject.id + index}>
                
                <Track
                  trackObject={trackObject} />

                <button
                  onClick={() => buttonFunction(trackObject, index)}>
                  {signage}
                </button>

              </div>
            )
          })
          : <h3>No Tracks Yet</h3>
      }
    </div>
  )
}

