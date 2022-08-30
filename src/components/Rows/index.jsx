import React, { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"
//components
import Thumbnail from "../Thumbnail";
import Carousel from 'react-bootstrap/Carousel';

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
   /*  <div className="main-row">
    <motion.div className="main-list">
     
      <h2>{title}</h2>
    

     
    
      <motion.div drag="x" className="movie-list" ref={carousel}>
       
        
        <motion.div drag="x" dragConstraints={{right:0}} className="thumbnail">
     {movie.map((item) => (
      <Thumbnail itemThumbnail={item}/>
     ))}
        </motion.div>
      
        
      </motion.div>
    </motion.div>
    </div> */
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Rows;
