import React, { useEffect, useRef } from "react";
import "../Login_signup/Signup.css";
import { signup_inputs } from "../../../Components/Utils/mock/Login_signup_data";
import Amazon_logo from "../../../Images/amazon_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import business_account from "./Business_account/BusinessSignup";

const Signup = ({ ToSwitchSignup }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    document.title = "Amazon Registration";

    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <div className="signup_container">
      <img style={{ width: "104px" }} src={Amazon_logo} alt="logo" />
      <div className="form_container">
        <h2>Create account</h2>

        {signup_inputs.map((item, index) => (
          <span key={index}>
            <label>{item.lableName}</label>
            <input
              ref={index === 0 ? firstInputRef : null}
              type={item.inputType}
              placeholder={item.inputPlaceholder}
            />

            {item.icon && item.requriments && (
              <p>
                <FontAwesomeIcon
                  style={{ color: "#3d88c9" }}
                  icon={item.icon}
                />
                &nbsp; {item.requriments}
              </p>
            )}
          </span>
        ))}
        <button>Continue</button>
        <p>
          By creating an account, you agree to Amazon's <br />
          <span> Conditions of Use </span> and <span> Privacy Notice. </span>
        </p>
        <hr />
        <div className="buyingfor_work">
          <h5>Buying for work?</h5>
          <span>Create a free business account</span>
        </div>
        <div className="signin_option">
          <p>
            Already have an account?
            <span onClick={ToSwitchSignup} className="signin_btn">
              Sign in
              <FontAwesomeIcon
                style={{ fontSize: "10px" }}
                icon={faCaretRight}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
