import styles from "./App.module.css"
import React, { useState } from "react";

import SearchResults from "./components/SearchResults.js"
import Playlist from "./components/Playlist.js"

function App() {

  const [searchData, setSearchData] = useState(
    [
      {
        artist: "Snoop Dog",
        song: "Beautiful",
        album: "Colab",
        id: "asdsadsad3452",
      },
      {
        artist: "Beyonce",
        song: "Diva",
        album: "Div",
        id: "asda3rfs333423",
      }
    ]
  )

  const [playlistData, setPlaylistData] = useState({
    playlistName: 'My Playlist',
    tracks: []
  }
  )

  function addTrack(songObject) {
    setPlaylistData((previousState) => { //previousState incoming property - default received from state integrated react function
      return {
        ...previousState,
        tracks: [...previousState.tracks, songObject]
      }
    })
  }

  function removeTrack(songObject, index) {

    setPlaylistData((previousState) => { //previousState incoming property - default received from state integrated react function
      
      let newArray = previousState.tracks;
      newArray.splice(index, 1)

      return {
        ...previousState,
        tracks: newArray
      }
    })
  }

  async function getTracks() {

  }

  function changeName(newName) {
 

  }

  return (
    <div className={styles.app}>
      <h1>Sunny's Spotify Project</h1>

      <div className={styles.tracklists}>

        <SearchResults
          searchData={searchData}
          addTrack={addTrack}
        />

        <Playlist
          playlistData={playlistData}
          removeTrack={removeTrack}
        />

      </div>


    </div>
  )
}

export default App
