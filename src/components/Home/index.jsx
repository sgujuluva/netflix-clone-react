import React, { useEffect, useState } from "react";
import Axios from "axios";
//components
import Featured from "../Featured/index";
import Navbar from "../Navbar/index";
import List from "../List/index";
import requests from "../utils/request";
import Banner from "../Banner";
import Rows from "../Rows";
//styles
import "./Home.css";




function Home() {
  const [trendingNow, setTrendingNow] = useState([])
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      await 
        fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US"
        ).then((res) => res.json())
        .then(data=>setTrendingNow( data.results))
          
          };
    fetchDataFromAPI();
   
  }, []);
console.log(trendingNow)
  return (
    <div className="home">
      <Navbar />
      {/*    <Banner /> */}
      {/* <Featured /> */}
      <Rows title="Trending Now" movies={trendingNow} />
   
      {/* <Rows title="Top Rated" movies={topRated} /> */}
      {/* <Rows title="Action Movies"/>
     <Rows title="Comedy Movies"/>
     <Rows title="Horror Movies"/>
     <Rows title="Romance Movies"/>
     <Rows title="Documentaries"/> */}
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
