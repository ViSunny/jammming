import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "./Tracklist";
import ChangeName from "../UI/ChangeName";

export default function Playlist({ playlistData, removeTrack, handleSavePLname }) {

  const [playlistChange, setPlaylistChange] = useState(false)
  const [newName, setNewName] = useState('');

  function handleClick() {
    setPlaylistChange(!playlistChange) //changes it to true
  }

  function handleCancel() {
    setPlaylistChange(!playlistChange) //changes it to false
  }



  return (

    <div className={styles.wrapper}>
      <h3>{playlistData.playlistName}</h3>

      {!playlistChange ? // if statement 
        <button onClick={handleClick}>Change Name</button> //changes to true
        :
        <ChangeName //if state is true
          handleSavePLname={handleSavePLname}
          handleCancel={handleClick}
          setPlaylistChange={setPlaylistChange}
        />}

      <Tracklist
        tracksData={playlistData.tracks}
        buttonFunction={removeTrack}
        signage={'-'}
      />

    </div>
  )
}

