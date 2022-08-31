import React, { useState } from "react";
//components
import Thumbnail from "../Thumbnail";
import Carousel from "react-bootstrap/Carousel";
//css
import "./Rows.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Rows({ title, movie }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="img-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <h3>{title}</h3>
        <Carousel.Item className="one">
          {movie.map((item) => (
            <Thumbnail itemThumbnail={item} />
          ))}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Rows;

/*  <div className="main-row">
    <motion.div className="main-list">    
      <h2>{title}</h2> 
    
      <motion.div drag="x" className="movie-list" ref={carousel}>      
        
        <motion.div drag="x" dragConstraints={{right:0}} className="thumbnail">
     {movie.map((item) => (
   
     ))}
        </motion.div>
      
        
      </motion.div>
    </motion.div>
    </div> */
/* const [width,setWidth] = useState(0);
  let carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]) */
{
  /* <img className="d-block w-100" src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path || item?.poster_path }`} alt="" /> */
}
