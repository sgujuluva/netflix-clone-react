import React, { useEffect, useState } from "react";
//components
import Thumbnail from "../Thumbnail";
//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
//css
import "./Rows.css"
import { imageListClasses } from "@mui/material";

function Rows({ title,movie }) {
  console.log(movie)
     return (
    <div className="main-list">
      <h2>{title}</h2>
      <div className="movie-list">
        <ChevronLeftOutlinedIcon />
        <div className="thumbnail">
           {movie.data.map((item => (
                <Thumbnail key={item.id} itemThumbnail={item}/>
            )))}  
              
        </div>
        <ChevronRightOutlinedIcon />
      </div>
    </div>
  );
}

export default Rows;
 /* const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI =  () => {
      Promise.all([
        fetch(
          "https://api.themoviedb.org/3/trending/all/day?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US"
        ),
        fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=0ccbed74fc5b3a104af07905ee60637d&language=en=US"
        ),
      ]).then(function (responses) {
        return Promise.all(
          responses.map(response => {
            return response.json();
          })
        );
      }).then(data=> setMovies(data))
    };
    fetchDataFromAPI();
  }, []); */
