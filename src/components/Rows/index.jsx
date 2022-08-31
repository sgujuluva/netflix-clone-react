import React from "react";
//components
import Thumbnail from "../Thumbnail";
import Carousel from "react-grid-carousel";
//css
import "./Rows.css";

function Rows({ title, movie }) {
  
  return (
    <div className="img-carousel">
      <h2 className="title">{title}</h2>
      <Carousel cols={6} rows={1} gap={20} loop>
        {movie.map((item) => (
          <Carousel.Item>
            <Thumbnail itemThumbnail={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Rows;

       
       
       
