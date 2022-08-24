import React from 'react'
//styles
import "./Navbar.css"
//images
import logo from "../../images/logo1.png"
function Navbar() {
  return (
    <div classname="navbar">
       
       <div className="navbar-container">
        <div className="left">
       <img className='logo' src={logo} alt="" />
        </div>
      
        <div className="right">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        </div> 
    </div>
  )
}

export default Navbar