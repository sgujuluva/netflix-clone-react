import React from 'react'
import "./Thumbnail.css"
import { baseUrl } from "../constants/movieurl";

function Thumbnail({itemThumbnail}) {
  return (
    <div className="thumbnail-main-container">
    <div className="thumbnail-container">
       <img src={`${baseUrl}${itemThumbnail?.backdrop_path || itemThumbnail?.poster_path }`} alt="" />
    </div>
    </div>
  )
}

export default Thumbnail