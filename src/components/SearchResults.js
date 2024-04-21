import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults({ searchData, addTrack }) {

  return (

    <div className={styles.wrapper}>
      <h3>Search Results</h3>



      <Tracklist
        tracksData={searchData}
        buttonFunction={addTrack}
        signage={'+'}
      />

    </div>
  )
}

export default SearchResults