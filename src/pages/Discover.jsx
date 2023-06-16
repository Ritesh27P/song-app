import { useEffect } from "react";
import { genres } from "../assets/constants";
import { SongCard, Error, Loader} from "../components";
import { useTopChartQuery } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying} = useSelector(state => state.player)
    const genreTitle = 'Pop';
    useEffect(() => {
        // const {data, error, isLoading } = useTopChartQuery();
    }, [])

    if (data) console.log(data);
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-white text-left text-3xl">Discover {genreTitle}</h2>
                <select
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
                >
                    {genres.map( genre => <option key={genre.value} value={genre.value} >{genre.title}</option>)}
                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.chart?.entries?.map( (song, i) => <SongCard isPlaying={isPlaying} activeSong={activeSong} key={i} title={song?.title} artist={song?.artist} cover={song?.cover} i={i} />)}
            </div>
        </div>
    );
}

export default Discover;


const data = {
    chart: {
      entries: [
        {
          "rank": 1,
          "title": "Unholy",
          "artist": "Sam Smith & Kim Petras",
          "cover": "https://charts-static.billboard.com/img/2022/10/sam-smith-jw8-unholy-dry-180x180.jpg",
          "position": {
            "positionLastWeek": null,
            "peakPosition": 1,
            "weeksOnChart": 1
          }
        },
        {
          "rank": 2,
          "title": "I'm Good (Blue)",
          "artist": "David Guetta & Bebe Rexha",
          "cover": "https://charts-static.billboard.com/img/2022/09/david-guetta-ruw-imgoodblue-rkt-180x180.jpg",
          "position": {
            "positionLastWeek": 3,
            "peakPosition": 2,
            "weeksOnChart": 5
          }
        },
        {
          "rank": 3,
          "title": "As It Was",
          "artist": "Harry Styles",
          "cover": "https://charts-static.billboard.com/img/2022/04/harry-styles-6jk-asitwas-frn-180x180.jpg",
          "position": {
            "positionLastWeek": 4,
            "peakPosition": 1,
            "weeksOnChart": 26
          }
        }
      ]
    }
}