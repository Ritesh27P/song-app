import axios from "axios";

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

export default fetchSongRecommendations;