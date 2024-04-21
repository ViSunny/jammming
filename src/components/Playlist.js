import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "./Tracklist";
import ChangeName from "../UI/ChangeName";

export default function Playlist({ playlistData, removeTrack }) {
  const [playlistChange, setPlaylistChange] = useState(false)

  function handleClick() {
    setPlaylistChange(!playlistChange)
  }

  function handleCancel() {
    setPlaylistChange(!playlistChange)
  }

  return (

    <div className={styles.wrapper}>
      <h3>{playlistData.playlistName}</h3>

      {!playlistChange ?
        <button onClick={handleClick}>Change Name</button>
        :
        <ChangeName
          handleCancel={handleClick}
        />}

      <Tracklist
        tracksData={playlistData.tracks}
        buttonFunction={removeTrack}
        signage={'-'}
      />

    </div>
  )
}

