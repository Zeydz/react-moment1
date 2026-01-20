import "./App.css";
import HeroHeader from "./components/HeroHeader";
import ItemCard from "./components/ItemCard";

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
      <HeroHeader title="Mina favoritlåtar" />
      <div className="item-list">
        {songs.map((song, index) => (
          <ItemCard key={index} song={song} />
        ))}
      </div>
    </>
  )
}

export default App;
