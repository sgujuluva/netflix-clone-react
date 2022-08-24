import React, {useRef} from "react";
//comp
import ListItem from "../ListItem/index";
import "./List.css";
//icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function List() {
    let listRef = useRef();
    const handleClick = (direction) => {
        let distance=listRef.current.getBoundingClientRect().x -24;
        if(direction === "left"){
            listRef.current.style.transform = `translateX(${250+distance}px)`
               }
    }
  return (
    <div className="list">
      <div className="wrapper">
<ArrowBackIosIcon className="arrow-icon" onClick={() => handleClick("left")}/>
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
    <ArrowForwardIosIcon className="arrow-icon" onClick={() => handleClick("right")}/>    
      </div>
    </div>
  );
}

export default List;
