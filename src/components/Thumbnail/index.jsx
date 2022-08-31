import React from "react";
import "./Thumbnail.css";

function Thumbnail({ itemThumbnail }) {
  return (
    <div className="thumbnail-container">
      <img
        src={`https://image.tmdb.org/t/p/w300/${
          itemThumbnail?.backdrop_path || itemThumbnail?.poster_path
        }`}
        alt=""
      />
    </div>
  );
}

export default Thumbnail;
