import React, { useEffect, useState } from "react";
//icons
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";

function Rows({ title }) {
  const [movies, setMovies] = useState([]);

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
  }, []);
console.log(movies)
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ChevronLeftOutlinedIcon />
        <ChevronRightOutlinedIcon />
      </div>
    </div>
  );
}

export default Rows;
