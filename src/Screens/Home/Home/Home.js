import React from "react";
import "../Home/Home.css";
import Navbar from "../../../Components/Navbar/Navbar.js";
import Home_ui from "./Home_ui/Home_ui.js";
import Footer from "../../../Components/Footer/Footer.js";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home_ui />
      </div>
    </>
  );
};

export default Home;
