import React from "react";
import Featured from "../Featured";
import Navbar from "../Navbar/index";
//styles
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
    </div>
  );
}

export default Home;
