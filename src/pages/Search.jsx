import { useParams } from "react-router-dom";
import { useSearchQueryQuery } from "../redux/store";
import { Loader } from "../components";
import { useSelector } from "react-redux";
import SongCard from "../components/SongCard";

const Search = () => {
    const {searchTerm} = useParams();
    const {data, isLoading, error} = useSearchQueryQuery(searchTerm);
    const { isPlaying, activeSong } = useSelector(state => state.player)

    if (isLoading) return <Loader />
    if (data) console.log(data)

    return (
        <div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.data?.map( (song, i) => <SongCard isPlaying={isPlaying} activeSong={activeSong} key={i} title={song?.title} artist={song?.artist?.name} cover={song?.album?.cover_big} i={i} />)}
            </div>
        </div>
    )
}

export default Search;
