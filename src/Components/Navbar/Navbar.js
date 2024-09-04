import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../Images/white_amazon_logo.png";
import america_flag from "../../Images/america_flag.webp";
import cart_icon from "../../Images/cart_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import miniNavbar from "../Mini_Navbar/Mini_Navbar";
import MiniNavbar from "../Mini_Navbar/Mini_Navbar";

const Navbar = () => {
  const [focusBorder, setFocusBorder] = useState(false);

  return (
    <>
      <div className="navBar">
        <img src={logo} alt="logo" />
        <div className="location">
          <FontAwesomeIcon style={{ color: "#fff" }} icon={faLocationDot} />
          <span>
            <span>Deliver to </span>
            <span> Pakistan </span>
          </span>
        </div>
        <div className={`search_bar ${focusBorder ? "focused" : ""}`}>
          <div className="option">
            <p>All</p>
            <FontAwesomeIcon className="arrow_icon" icon={faCaretDown} />
          </div>
          <input
            type="search"
            placeholder="Search Amazon"
            onFocus={() => setFocusBorder(true)}
            onBlur={() => setFocusBorder(false)}
          />
          <div className="search">
            <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="language">
          <img src={america_flag} alt="flag" />
          <span>
            EN <FontAwesomeIcon className="lang_icon" icon={faCaretDown} />
          </span>
        </div>
        <div className="account">
          <p>Hello, sign in</p>
          <h4>
            Account & Lists
            <FontAwesomeIcon className="signin_option" icon={faCaretDown} />
          </h4>
        </div>
        <div className="return_orders">
          <p>Reurns</p>
          <h4>& Orders</h4>
        </div>
        <div className="cart">
          <p>0</p>
          <img src={cart_icon} alt="cart_icon" />
          <h5>Cart</h5>
        </div>
      </div>
      <MiniNavbar />
    </>
  );
};

export default Navbar;
