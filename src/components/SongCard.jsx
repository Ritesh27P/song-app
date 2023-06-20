import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PlayPause from "./PlayPause";
import { prevSong, setActiveSong, playPause} from "../redux/features/playerSlice"
import fetchSongRecommendations from "../services/fetchRecommendation"
import playSong from "../services/playSong";

const SongCard = ({title, artist, cover, isPlaying, activeSong, i}) => {
    const dispatch = useDispatch();

    const handlePauseClick = async () => {
        dispatch(playPause(false))
    };

    const handlePlayClick = async () => {
        const song = await playSong(title, artist)
        const track = await fetchSongRecommendations(title, artist);
        dispatch(setActiveSong({song, track}))
        dispatch(playPause(true))
    };


    return (
      <div className="flex w-[250px] flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
          <div className="relative group w-full h-56">
              <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === title ? 'flex bg-black bg-opacity-70': "hidden"} `}>
                  <PlayPause
                    activeSong={activeSong}
                    isPlaying={isPlaying}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
                    song={title}
                  />
              </div>
              <img src={cover} alt="song_img" className="h-56"/>
          </div>

          <div className="flex flex-col mt-4">
                  <p className="font-semibold text-lg text-white truncate">
                      <Link to={`/songs/${title}+${artist}`}>
                          {title}
                      </Link>
                  </p>
                  {artist ? 
                  <p className="text-sm text-gray-400 truncate mt-1">
                      <Link to={`/artists/${artist}`}>
                          {artist}
                      </Link>
                  </p>
                  : ""
                  }
              </div>
      </div>
    )
};

export default SongCard;
