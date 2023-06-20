import axios from "axios";


const getSongs = async (artist) => {
	const client_id = '1f2a4142da274add90b6948346dd665c'
    const client_secret = 'e6b1442abedc48af879383fc3081b2ba'

    const auth_url = 'https://accounts.spotify.com/api/token';
    const auth_data = new URLSearchParams();
    auth_data.append('grant_type', 'client_credentials');
    auth_data.append('client_id', client_id);
    auth_data.append('client_secret', client_secret);

	try {
		const auth_response = await axios.post(auth_url, auth_data)
        const access_token = auth_response.data.access_token;
        const headers = {'Authorization': `Bearer ${access_token}`}

		const search_params = {
			params: {
				'q': artist,
				'type': 'artist',
				'limit': 50
			},
			headers: headers
		}
		const artistsList = await axios.get('https://api.spotify.com/v1/search', search_params)
		const artist_id = artistsList.data.artists.items[0].id

		const songs = await axios.get(`https://api.spotify.com/v1/artists/${artist_id}/top-tracks`, {
			params: {'country': 'US'},
			headers: headers
		})
		console.log(songs.data)
	} catch (error) {
		console.log(error)
		
	}
}

export default getSongs;