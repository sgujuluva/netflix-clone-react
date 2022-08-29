import React, { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"
//components
import Thumbnail from "../Thumbnail";

//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
//css
import "./Rows.css";


function Rows({ title, movie }) {
  const [width,setWidth] = useState(0);
  let carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <div className="main-row">
    <motion.div className="main-list">
      <h2>{title}</h2>
      <motion.div drag="x" className="movie-list" ref={carousel}>
       
{/*         <ChevronLeftOutlinedIcon /> */}
        <motion.div drag="x" dragConstraints={{right:0}} className="thumbnail">
     {movie.map((item) => (
      <Thumbnail itemThumbnail={item}/>
     ))}
        </motion.div>
  {/*       <ChevronRightOutlinedIcon /> */}
        
      </motion.div>
    </motion.div>
    </div>
  );
}

export default Rows;
