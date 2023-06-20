import axios from "axios";

const getGenreSongs = async (genreName) => {
    const base_url = 'https://api.spotify.com/v1/';
    
    // API credentials
    const client_id = '1f2a4142da274add90b6948346dd665c'
    const client_secret = 'e6b1442abedc48af879383fc3081b2ba'
    
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

        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            },
            params: {
                seed_genres: genreName,
                limit: 10
            }
        })
        const tracks = response.data.tracks;
        const genreSongs = tracks.map(track => {
            let artists = track.artists.map(artist => artist.name)
            if (artists.length === 2) {
                artists = artists.join(' & ')
            } else {
                artists = artists.join(', ')
            }
            return {
                title: track.name,
                artist: artists,
                cover: track.album.images[0].url,
            }
        });
        return {
            chart: {
                entries: [...genreSongs]
            }
        }

    } catch (error) {
        console.log(error)
        
    }
}

export default getGenreSongs;