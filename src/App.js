import "./App.css"
import Track from "./components/Track"

function App() {
  const tracksResultArray = [
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
    },
  ]

  return (
    <div className="App">
      <h1>Sunny's Spotify Project</h1>

      <h3>Tracks</h3>

      {
      tracksResultArray.length > 0 ?

        tracksResultArray.map(trackObject => {

          return (
            <Track
              trackObject={trackObject}
              key={trackObject.id}
            />

          )

        })

        : <h3>Loding Track Data from API</h3>

      }

    </div>
  )
}

export default App
