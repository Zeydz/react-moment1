import "./App.css";
import HeroHeader from "./components/HeroHeader";
import ItemCard from "./components/ItemCard";
import Footer from "./components/Footer";

function App() {
  // Song list
  const songs = [
    {
      name: "Piano Man",
      artist: "Billy Joel",
      yearReleased: 1973,
      inFavorites: true,
    },
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      yearReleased: 2017,
      inFavorites: false,
    },
    {
      name: "Bohemian Rhapsody",
      artist: "Queen",
      yearReleased: 1975,
      inFavorites: true,
    },
    {
      name: "Raindance",
      artist: "Dave",
      yearReleased: 2025,
      inFavorites: true,
    },
        {
      name: "Paradies",
      artist: "Coldplay",
      yearReleased: 2011,
      inFavorites: false,
    },
        {
      name: "End of beginning",
      artist: "DJO",
      yearReleased: 2025,
      inFavorites: true,
    }
  ];
  return (
    <>
      {/* Map through song list and print it out with song and key */}
      <HeroHeader title="Min musiklista" />
      <div className="item-list">
        {songs.map((song, index) => (
          <ItemCard key={index} song={song} />
        ))}
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App;
