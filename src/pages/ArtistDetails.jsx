import { useParams } from "react-router-dom";
import { useArtistDetailQuery } from "../redux/store";
import Loader from "../components/Loader";
import SongCard from "../components/SongCard"
import { useSelector } from "react-redux";

const ArtistDetails = () => {
	const { name } = useParams();
	const {activeSong, isPlaying } = useSelector(state => state.player)
	const { data, isLoading, error } = useArtistDetailQuery(name)

	if (isLoading) return "Loading..."
	let arr = []
	const filterSongs = data?.data.filter(song => {
		if (!song?.artist?.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
			return false
		}
		if (arr.includes(song?.title)) {
			return false
		} else {
			arr.push(song?.title)
			return true
		}
	})
	const renderSongs = filterSongs.map(song => {
		 return (
			<div>
				<SongCard isPlaying={isPlaying} activeSong={activeSong} title={song?.title} artist={song?.artist.name} cover={song?.album?.cover_big} />
			</div>
		 )
	})
	console.log(filterSongs);
	return (
		<div className="flex flex-wrap sm:justify-start justify-center gap-8">
			{renderSongs}
		</div>
	)
}

export default ArtistDetails;
