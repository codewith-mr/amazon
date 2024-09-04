import React from "react";
import "../Mini_Navbar/Mini_Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MiniNavbar = () => {
  return (
    <>
      <div className="mini_navbar">
        <div className="all">
          <FontAwesomeIcon icon={faBars} />
          <p>ALL</p>
        </div>
        <div className="all">
          <p>Today's Deals</p>
        </div>
        <div className="all">
          <p>Customer Service</p>
        </div>
        <div className="all">
          <p>Registry</p>
        </div>
        <div className="all">
          <p>Gift Cards</p>
        </div>
        <div className="all">
          <p>Sell</p>
        </div>
      </div>
    </>
  );
};

export default MiniNavbar;
