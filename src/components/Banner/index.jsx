import React, { useEffect, useState } from "react";
import "./Banner.css";
import { baseUrl } from "../constants/movieurl";
import Axios from "axios";

function Banner() {

  const [netflixOriginals, setNetflixOriginals] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&with_network=213`
      );
      let datas =await response.data.results;
      //getting random poster
           let randomPoster = [];
      for (let i = 0; i < datas.length; i++) {
        const index = Math.floor(Math.random() * datas.length);
        randomPoster.push(datas[index]);
      }
      setNetflixOriginals(randomPoster);
    };
    apiFetch();
  }, []);

 
  return (
    <div className="poster">
       {netflixOriginals && netflixOriginals.map((item) => {
        return (
          <>
            <div className="image-container">
              <img
                src={`${baseUrl}${item?.backdrop_path || item?.backdrop_path}`}
                alt=""
              />
               <span>
                <h1>{item.title}</h1>
                <p>{item.overview}</p>
              </span>
            </div>
          
          </>
        );
      })} 
    </div>
  );
}

export default Banner;



 /* const apiFetch = async () => {
  
    const response = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&with_network=213` 
    );
    setNetflixOriginals(response.data.results );
  };


let random = Math.floor(Math.random() * 20) 

  useEffect(() => {
    apiFetch();
    
   
  },[netflixOriginals]);
 */
