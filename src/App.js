import { Provider } from "react-redux";
import { Login_signup } from "./Screens/Home/Login_signup/Login-Signup";
import { AppProvider } from "./context/AppContext";
import { store } from "./redux/store";
import Home from "./Screens/Home/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <AppProvider>
            <Login_signup />
          </AppProvider>
        </Provider>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
