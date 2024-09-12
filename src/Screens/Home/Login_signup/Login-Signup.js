import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useApp } from "../../../context/AppContext";
import Home from "../Home/Home";
import Login from "./Login";
import Signup from "./Signup";
import { useSelector } from "react-redux";

export const Login_signup = () => {
  const { handleLogin, handleLogout } = useApp();

  const user = useSelector((state) => state.user);

  const Authrouter = createBrowserRouter([
    {
      path: "/",
      element: <Home onLogout={handleLogout} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  const unAuthRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login handleLogin={handleLogin} />,
    },
    {
      path: "Signup",
      element: <Signup onSignup={handleLogin} />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={user.isAuth ? Authrouter : unAuthRouter} />
      <ToastContainer />
    </>
  );
};
