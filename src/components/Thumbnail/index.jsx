import React from 'react'
import "./Thumbnail.css"
import { baseUrl } from "../constants/movieurl";
import Carousel from "react-bootstrap/Carousel";

function Thumbnail({itemThumbnail}) {
  return (
    <div className="thumbnail-main-container">
    <div className="thumbnail-container">
  
       <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w300/${itemThumbnail?.backdrop_path || itemThumbnail?.poster_path }`} alt="" />
       
    </div>
    </div>
  )
}

export default Thumbnail