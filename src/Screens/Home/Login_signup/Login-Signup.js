import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer/Footer";

export const Login_signup = () => {
  const [showPages, seShowPages] = useState(null);

  const handleLoginSwitch = () => {
    seShowPages(true);
  };

  const handleSignupSwitch = () => {
    seShowPages(false);
  };

  return (
    <>
      {!showPages ? (
        <Login ToSwitchLogin={handleLoginSwitch} />
      ) : (
        <Signup ToSwitchSignup={handleSignupSwitch} />
      )}
      <Footer />
    </>
  );
};
