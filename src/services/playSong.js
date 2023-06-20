import axios from "axios";


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
      return response.data.data[0];
    } catch (error) {
      return error
    }
  
    return 
  
  }
  
export default playSong;