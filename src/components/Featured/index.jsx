import React from "react";
import "./Featured.css";
//icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Featured({type}) {
  return (
    <div className="featured">
        {type &&  ( 
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="Genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="horror">Horror</option>
                    <option value="crime">Crime</option>
                    <option value="sciencefiction">Sci-fi</option>
                    <option value="comedy">Comedy</option>
                </select>
            </div>
            )}
      <img
        src="https://media.istockphoto.com/photos/father-and-daughter-day-picture-id584570368?b=1&k=20&m=584570368&s=170667a&w=0&h=bpjAb4pVSIYO63hXJR94UCX83d_fFbd4-PgogYWsu34="
        alt=""
      />
      <div className="info">
        
      <span className="description">
        If you want a happy ending, that depends, of course, on where you stop
        your story. ... Always make the audience suffer as much as possible. ...
        Cinema is the most beautiful fraud in the world. ... The sound and music
        are 50% of the entertainment in a movie. ... Cinema is a matter of
        what's in the frame and what's out.
      </span>
      <div className="button">
        <button>
          <PlayArrowIcon />
         <span>Play</span> 
        </button>
        <button>
          <InfoIcon />
          <span>More Info</span> 
        </button>
      </div>
      </div>
    </div>
  );
}

export default Featured;
