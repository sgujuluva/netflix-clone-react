import React, { useEffect, useState } from "react";
//styles
import "./Navbar.css";
//images
import logo from "../../images/logo4.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {   
    if (window.scrollY >= 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
 
  return (
    <div>
      <div
        className="navbar"
        style={{ backgroundColor: isScrolled && "black" }}
      >
        <div className="navbar-container">
          <div className="left">
            <img className="logo" src={logo} alt="" />
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
          </div>

          <div className="right">
            <SearchIcon />
            <span>Kids</span>
            <NotificationsActiveIcon />
            <img
              className="profile-pic"
              src="https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__340.jpg"
              alt=""
            />
            <div className="profile">
              <ArrowDropDownIcon />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
