import React, { useEffect, useState } from "react";
//components
import Thumbnail from "../Thumbnail";

//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
//css
import "./Rows.css";


function Rows({ title, movie }) {
  return (
    <div className="main-list">
      <h2>{title}</h2>
      <div className="movie-list">
        <ChevronLeftOutlinedIcon />
        <div className="thumbnail">
     {movie.map((item) => (
      <Thumbnail itemThumbnail={item}/>
     ))}
        </div>
        <ChevronRightOutlinedIcon />
      </div>
    </div>
  );
}

export default Rows;
