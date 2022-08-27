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
   
  return (
    <div className="home">
      <Navbar />
   {/*    <Banner /> */}
      {/* <Featured /> */}
     <Rows title="Trending Now" />
     <Rows title="Top Rated"/>
     <Rows title="Action Movies"/>
     <Rows title="Comedy Movies"/>
     <Rows title="Horror Movies"/>
     <Rows title="Romance Movies"/>
     <Rows title="Documentaries"/>
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
