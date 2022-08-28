import React, { useEffect, useState } from "react";
import Axios from "axios";
//components
import Featured from "../Featured/index";
import Navbar from "../Navbar/index";
import requests from "../utils/request";
import Banner from "../Banner";
import Rows from "../Rows";
//styles
import "./Home.css";
import axios from "axios";

function Home() {
  const [trendingNow1, setTrendingNow1] = useState([]);
  const [topRated1, setTopRated1] = useState([]);
  const [actionMovies1, setActionMovies1] = useState([]);
  const [comedyMovies1, setComedyMovies1] = useState([]);
  const [horrorMovies1, setHorrorMovies1] = useState([]);
  const [romanceMovies1, setRomanceMovies1] = useState([]);
  const [documentaries1, setDocumentaries1] = useState([]);
  /* useEffect(() => {
    const fetchDataFromAPI = async () => {
      await Promise.all[
        (fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US"
        )
          .then((res) => res.json())
          .then((data) => setTrendingNow(data.results)),
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US"
        )
          .then((res) => res.json())
          .then((data) => setTopRated(data.results)),
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US&with_genres=28"
        )
          .then((res) => res.json())
          .then((data) => setActionMovies(data.results)))
      ];
    };
    fetchDataFromAPI();
  }, []); */
  const fetchData = () => {
    const trendingNowApi =
      "https://api.themoviedb.org/3/trending/all/day?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US";
    const topRatedApi =
      "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US";
    const actionMoviesApi =
      "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US&with_genres=28";
    const comedyMoviesApi =
      "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en-US&with_genres=35";
    const horrorMoviesApi =
      "https://api.themoviedb.org/3/discover/movie?0ccbed74fc5b3a104af07905ee60637d&language=en-US&with_genres=27";
    const romanceMoviesApi =
      "https://api.themoviedb.org/3/discover/movie?0ccbed74fc5b3a104af07905ee60637d&language=en-US&with_genres=10749";
    const documentariesApi =
      "https://api.themoviedb.org/3/discover/movie?0ccbed74fc5b3a104af07905ee60637d&language=en-US&with_genres=99";

    const trendingNow = Axios.get(trendingNowApi);
    const topRated = Axios.get(topRatedApi);
    const actionMovies = Axios.get(actionMoviesApi);
    const comedyMovies = Axios.get(comedyMoviesApi);
    const horrorMovies = Axios.get(horrorMoviesApi);
    const romanceMovies = Axios.get(romanceMoviesApi);
    const documentaries = Axios.get(documentariesApi);

    Axios.all([
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ]).then(
      Axios.spread((...allData) => {
        const trendingNowMovie = allData[0];
        const topRatedMovie = allData[1];
        const actionMoviesMovie = allData[2];
        const comedyMoviesMovie = allData[3];
        const horrorMoviesMovie = allData[4];
        const romanceMoviesMovie = allData[5];
        const documentaries = allData[6];
        setTrendingNow1(trendingNowMovie);
        setTopRated1(topRatedMovie);
        setActionMovies1(actionMoviesMovie);
        setComedyMovies1(comedyMoviesMovie);
        setHorrorMovies1(horrorMoviesMovie);
        setRomanceMovies1(romanceMoviesMovie);
        setDocumentaries1(documentaries);
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(trendingNow1);

  return (
    <div className="home">
      <Navbar />
      {/*    <Banner />  */}
      {/* <Featured /> */}
      <Rows title="Trending Now" movie={trendingNow1} />

      <Rows title="Top Rated" movie={topRated1} />
      <Rows title="Action Movies" movie={actionMovies1} />
      <Rows title="Comedy Movies" movie={comedyMovies1} />
      <Rows title="Horror Movies" movie={horrorMovies1} />
      <Rows title="Romance Movies" movie={romanceMovies1} />
      <Rows title="Documentaries" movie={documentaries1} />
    </div>
  );
}

export default Home;

/* export const fetchDataFromAPI = async () => {
const [netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries] = await Promise.all([
  fetch(requests.fetchNetflixOriginals).then(res => res.json()).then(data=>console.log(data.results) ),
  fetch(requests.fetchTrendingNow).then(res => res.json()),
  fetch(requests.fetchTopRated).then(res => res.json()),
  fetch(requests.fetchActionMovies).then(res => res.json()),
  fetch(requests.fetchComedyMovies).then(res => res.json()),
  fetch(requests.fetchHorrorMovies).then(res => res.json()),
  fetch(requests.fetchRomanceMovies).then(res => res.json()),
  fetch(requests.fetchDocumentaries).then(res => res.json()),
]) 
 } */
/* return{
  props:{
    netflixOriginals:netflixOriginals.results,
    trendingNow:trendingNow.results,
    topRated:topRated.results,
    actionMovies:actionMovies.results,
    comedyMovies:comedyMovies.results,
    horrorMovies:horrorMovies.results,
    romanceMovies:romanceMovies.results,
    documentaries : documentaries.results,
  }
} */
