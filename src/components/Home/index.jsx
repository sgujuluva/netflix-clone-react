import React from "react";
import Featured from "../Featured/index";
import Navbar from "../Navbar/index";
import List from "../List/index";
//styles
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
       <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}

export default Home;
