import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SongDetails = () => {
    const {activeSong, currentSongs, isActive, isPlaying} = useSelector(state => state.player)
    
    const track = currentSongs.map(song => {
        return (
            <div> 
                <h2>{song.title}</h2>
                <h5>{song?.artist?.name}</h5>
            </div>
        )
    })
    return (
        <div>
            Song: {activeSong?.title}
        </div>
    )
}

export default SongDetails;
