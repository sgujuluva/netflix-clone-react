import React, { useRef, useState } from "react";
//comp
import ListItem from "../ListItem/index";
import "./List.css";
//icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function List() {

  const [slide, setSlide] = useState(0);

  let listRef = useRef();

  const handleClick = (direction) => {

    let distance = listRef.current.getBoundingClientRect().x - 24;

    console.log(distance)

    if (direction === "left" && slide > 0) {
      setSlide(slide - 1);
      listRef.current.style.transform = `translateX(${250 + distance}px)`;
    }
    if (direction === "right" && slide < 5) {
      setSlide(slide + 1);
      listRef.current.style.transform = `translateX(${-250 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <div className="wrapper">
        <ArrowBackIosIcon
          className="arrow-icon left-ic"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
              </div>
        <ArrowForwardIosIcon
          className="arrow-icon right-ic"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;
