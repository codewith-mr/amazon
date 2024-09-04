import React, { useEffect } from "react";
import "../Business_account/BusinessSignup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { organization_detail } from "../../../../Components/Utils/mock/Login_signup_data";
import building_img from "../../../../Images/building.svg";
import FooterforBusiness from "../Footer/FooterforBusiness";
import BusinessHeader from "./BusinessHeader/BusinessHeader";

const BusinessSignup = () => {
  useEffect(() => {
    document.title = "Amazon Business";
  }, []);

  return (
    <>
      <BusinessHeader />
      <div className="bg-white">
        <div className="form-container container">
          <div>
            <p>Let’s create your free Amazon Business account</p>
            <label>
              Enter the email you'd like to use for your business account
            </label>
            <input type="text" placeholder="Enter email" />
            <button>Get Started</button>
            <h5>
              Already an Amazon Business customer? <span> Sign in </span>
            </h5>
          </div>
          <div>
            <p>Added value for every type of organization</p>

            {organization_detail.map((item, index) => (
              <div key={index} className={item.className}>
                <div>
                  <img src={item.image} alt="img" />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
            <div className="Image">
              <img src={building_img} alt="img" />
            </div>
            <div className="learn_more">
              <span>
                <p>Learn more about Amazon Business</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterforBusiness />
    </>
  );
};

export default BusinessSignup;
