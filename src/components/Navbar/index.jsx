import React from 'react'
//styles
import "./Navbar.css"
//images
import logo from "../../images/logo1.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Navbar() {
  return (
    <div classname="navbar">
       
       <div className="navbar-container">
        <div className="left">
       <img className='logo' src={logo} alt="" />
       <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
      
        <div className="right">
        <SearchIcon/>
        <span>Kids</span>
        <NotificationsActiveIcon/>
        </div>
        </div> 
    </div>
  )
}

export default Navbar