import "./ItemCard.css";
// Interface with song details
interface ItemCardProps {
    song: {
        name: string,
        artist: string,
        yearReleased: number,
        inFavorites: boolean
    }
}

// Design for the ItemCard
function ItemCard({song} : ItemCardProps) {
  return (
    <div className="item-card">
        <h2>{song.name}</h2>
        <p>Artist: {song.artist}</p>
        <p>Släppt: {song.yearReleased}</p>
        <p>{song.inFavorites ? "Favoriserad" : "Ej favoriserad"}</p>
    </div>
    
  )
}

export default ItemCard