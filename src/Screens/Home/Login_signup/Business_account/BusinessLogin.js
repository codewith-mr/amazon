import React from "react";
import BusinessHeader from "./BusinessHeader/BusinessHeader";
import "../Business_account/BusinessLogin.css";
import { FontAwesomeIcon, faFontAwesome } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { BusinessLogin_forms } from "../../../../Components/Utils/mock/Login_signup_data";
import Footer from "../Footer/Footer";

const BusinessLogin = () => {
  return (
    <>
      <div className="bg-white">
        <BusinessHeader />
        <div className="container businessLogin_container">
          <div className="business_login">
            <h3>Sign in to get started</h3>

            {BusinessLogin_forms.map((item, index) => (
              <div key={index}>
                <span>
                  <label>{item.lableName}</label>
                  <p>{item.option}</p>
                </span>
                <input type={item.type} />
              </div>
            ))}
            <button>Sign in</button>
            <p>
              By continuing, you agree to Amazon's
              <span> Conditions of Use </span> and <span> Privacy Notice.</span>
            </p>
            <span className="signed">
              <input type="checkbox" />
              <p>
                Keep me signed in.{" "}
                <span>
                  <p>Details</p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessLogin;
