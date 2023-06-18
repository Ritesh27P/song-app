import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PlayPause from "./PlayPause";
import { prevSong, setActiveSong, playPause} from "../redux/features/playerSlice"
import axios from "axios";

const SongCard = ({title, artist, cover, isPlaying, activeSong, i}) => {
    const dispatch = useDispatch();

    const handlePauseClick = async () => {
        dispatch(playPause(false))
    };

    const handlePlayClick = async () => {
        const song = await playSong(title, artist)
        const track = await fetchSongRecommendations(title, artist);
        console.log(track);
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

const playSong = async (title, artist) => {
  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {
      q: `${title} ${artist}`
    },
    headers: {
      'X-RapidAPI-Key': '21a8342662msh9fac29e21126d9fp193e6ajsnbd708c8a2510',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data.data[0]);
    return response.data.data[0];
  } catch (error) {
    return error
  }

  return 

}

const fetchSongRecommendations = async (title, artist) => {

  // Spotify API endpoints
  const base_url = 'https://api.spotify.com/v1/';
  const recommendations_url = base_url + 'recommendations';
  
  // API credentials
  const client_id = '1f2a4142da274add90b6948346dd665c'
  const client_secret = 'e6b1442abedc48af879383fc3081b2ba'
  
  // Song information
  const current_song_name = `${title} ${artist}`;
  
  // Get an access token
  const auth_url = 'https://accounts.spotify.com/api/token';
  const auth_data = new URLSearchParams();
  auth_data.append('grant_type', 'client_credentials');
  auth_data.append('client_id', client_id);
  auth_data.append('client_secret', client_secret);

  try {
    
      const auth_response = await axios.post(auth_url, auth_data)
      const access_token = auth_response.data.access_token;
      const headers = {'Authorization': `Bearer ${access_token}`}
      const search_url = base_url + 'search';
      const search_params = {
        params: {
          q: current_song_name,
          type: 'track',
          limit: 1
        },
        headers: headers
      };
      
      const search_response = await axios.get(search_url, search_params)
      const track_data = search_response.data.tracks.items[0];
      const track_id = track_data.id;
      const recommendations_params = {
        params: {
          seed_tracks: track_id,
          limit: 10
        },
        headers: headers
      };

      const recommendations_response = await axios.get(recommendations_url, recommendations_params)
      const recommendations_data = recommendations_response.data.tracks;
      return recommendations_data;

  } catch (error) {
    console.log(error);
  }
          
}
export default SongCard;
