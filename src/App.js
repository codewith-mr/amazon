import "./App.css";
import Home from "./Screens/Home/Home/Home";
import { Login_signup } from "./Screens/Home/Login_signup/Login-Signup";
import { BrowserRouter } from "react-router-dom";
import Login from "./Screens/Home/Login_signup/Login";
import Business_login_signup from "./Screens/Home/Login_signup/Business_login_signup";
import BusinessLogin from "./Screens/Home/Login_signup/Business_account/BusinessLogin";

function App() {
  return (
    <>
      <div>
        {/* <Home /> */}
        <BrowserRouter>
          <Login_signup />
        </BrowserRouter>
        {/* <Business_login_signup /> */}
        {/* <BusinessLogin /> */}
      </div>
    </>
  );
}

export default App;
