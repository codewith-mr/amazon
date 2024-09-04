import React from "react";
import "../BusinessHeader/BusinessHeader.css";
import businessLogo from "../../../../../Images/amazon_businessLogo.png";
import { businessHeader_tabs } from "../../../../../Components/Utils/mock/Login_signup_data";

const BusinessHeader = () => {
  return (
    <>
      <nav className="nav">
        <div className="container ">
          <img src={businessLogo} alt="businessLogo" />
          <div>
            {businessHeader_tabs.map((item, index) => (
              <div key={index} className={item.className}>
                <p>{item.digit}</p>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default BusinessHeader;
