const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
    fetchTrending :`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en=US`
}


export default requests