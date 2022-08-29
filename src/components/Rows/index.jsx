import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
//components
import Thumbnail from "../Thumbnail";

//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
//css
import "./Rows.css";


function Rows({ title, movie }) {
  return (
    <div className="main-row">
    <div className="main-list">
      <h2>{title}</h2>
      <motion.div className="movie-list">
       
        <ChevronLeftOutlinedIcon />
        <motion.div drag="x" dragConstraints={{right:0}} className="thumbnail">
     {movie.map((item) => (
      <Thumbnail itemThumbnail={item}/>
     ))}
        </motion.div>
        <ChevronRightOutlinedIcon />
        
      </motion.div>
    </div>
    </div>
  );
}

export default Rows;
