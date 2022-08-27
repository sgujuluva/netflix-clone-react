import React from 'react'
import {baseUrl} from "../constants/movieurl"

function Banner({movie}) {
  return (
    <div>
        {movie.map(item => {
         return   <img src={`${baseUrl}${item?.backdrop_path || item?.backdrop_path}`} alt="" />
        })}
    </div>
  )
}

export default Banner