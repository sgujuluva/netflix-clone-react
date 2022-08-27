import React from 'react'
import "./Thumbnail.css"

function Thumbnail({movieThumbnail}) {
  return (
    <div className="thumbnail-main-container">
    <div className="thumbnail-container">
       <img src={`https://image.tmdb.org/t/p/w500${movieThumbnail.backdrop_path || movieThumbnail.poster_path }`} alt="" />
    </div>
    </div>
  )
}

export default Thumbnail