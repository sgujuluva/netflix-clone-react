import React from "react";
import Featured from "../Featured/index";
import Navbar from "../Navbar/index";
import List from "../List/index";
import requests from "../utils/request"
//styles
import "./Home.css";
function Home({netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries}) {
  return (
    <div className="home">
      <Navbar />
       <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}

export default Home;

export const fetchDataFromAPI = async () => {
const [netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies,documentaries] = await Promise.all([
  fetch(requests.fetchNetflixOriginals).then(res => res.json()),
  fetch(requests.fetchTrendingNow).then(res => res.json()),
  fetch(requests.fetchTopRated).then(res => res.json()),
  fetch(requests.fetchActionMovies).then(res => res.json()),
  fetch(requests.fetchComedyMovies).then(res => res.json()),
  fetch(requests.fetchHorrorMovies).then(res => res.json()),
  fetch(requests.fetchRomanceMovies).then(res => res.json()),
  fetch(requests.fetchDocumentaries).then(res => res.json()),
])
return{
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
}
}