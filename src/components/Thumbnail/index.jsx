import React from "react";
import "./Thumbnail.css";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Thumbnail({ itemThumbnail }) {
  return (
    // <div className="thumbnail-main-container">
    <div className="thumbnail-container">
      <img
        // className="d-inline-block w-100"
        src={`https://image.tmdb.org/t/p/w300/${
          itemThumbnail?.backdrop_path || itemThumbnail?.poster_path
        }`}
        alt=""
      />
    </div>
    // </div>
  );
}

export default Thumbnail;
