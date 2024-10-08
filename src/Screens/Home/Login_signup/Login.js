import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import "../Login_signup/Login.css"
import Amazon_logo from "../../../Images/amazon_logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = ({ handleLogin }) => {
  const firstInputRef = useRef(null)
  const [showOption, setShowOption] = useState(null)

  const handleShowOption = () => {
    setShowOption(!showOption)
  }

  useEffect(() => {
    document.title = "Amazon Sign-In"

    if (firstInputRef.current) {
      firstInputRef.current.focus()
    }
  }, [])

  const notify = () => toast("SIGN-UP PAGE")

  return (
    <div className="signin_container">
      <img style={{ width: "104px" }} src={Amazon_logo} alt="logo" />
      <div className="signin_form_container">
        <h2>Sign in</h2>

        <span>
          <label>Email or mobile phone number</label>
          <input ref={firstInputRef} type="email" />
        </span>

        <button onClick={handleLogin}>Continue</button>
        <p>
          By continuing, you agree to Amazon's
          <span> Conditions of Use </span> and <span> Privacy Notice. </span>
        </p>
        <div onClick={handleShowOption} className="need_help">
          <FontAwesomeIcon
            style={{ fontSize: "10px", padding: "3px 0 0 0" }}
            icon={showOption ? faCaretDown : faCaretRight}
          />
          <h3>Need help?</h3>
        </div>
        {showOption && (
          <div className="options">
            <p>Forgot your password?</p>
            <p>Other issues with Sign-In</p>
          </div>
        )}
        <hr />
        <div className="buyingfor_work2">
          <h5>Buying for work?</h5>
          <span>Shop on Amazon Business</span>
        </div>
      </div>
      <div className="newto">
        <hr />
        <span>New to Amazon?</span>
        <hr />
      </div>

      <Link style={{ textDecoration: "none", color: "black" }} to={"/Signup"}>
        <button className="signup_btn" onClick={notify}>
          Create your Amazon account
        </button>
      </Link>
    </div>
  )
}

export default Login
