import React from "react";
import "../Footer/Footer.css";
import { main_footer_btn } from "../Utils/mock/Home_data";
import logo from "../../Images/white_amazon_logo.png";
import us_flag from "../../Images/america_flag.webp";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="backToTop">
          <h1>Back to top</h1>
        </div>

        <div className="main_footer">
          <div className="btn_box">
            {main_footer_btn.map((item, index) => (
              <span key={index} className={item.className}>
                <h1>{item.title}</h1>
                {item.btn.map((itembtn, indexbtn) => (
                  <p key={indexbtn}>{itembtn}</p>
                ))}
              </span>
            ))}
          </div>
          <div className="footer_logo">
            <img src={logo} />
            <span>English</span>
            <span>USD - U.S. Dollar</span>
            <span>
              <img style={{ height: "12px" }} src={us_flag} />
              United States
            </span>
          </div>
        </div>
        <div className="mini_footer"></div>
      </div>
    </>
  );
};

export default Footer;
