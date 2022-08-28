import React from 'react'
import "./Thumbnail.css"

function Thumbnail({itemThumbnail}) {
  return (
    <div className="thumbnail-main-container">
    <div className="thumbnail-container">
       <img src={`https://image.tmdb.org/t/p/w500${itemThumbnail.backdrop_path || itemThumbnail.poster_path }`} alt="" />
    </div>
    </div>
  )
}

export default Thumbnail