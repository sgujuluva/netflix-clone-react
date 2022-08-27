const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
    fetchTrending :`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchNetflixOriginals:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`,
}


export default requests