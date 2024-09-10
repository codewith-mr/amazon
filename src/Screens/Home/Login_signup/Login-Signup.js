import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer/Footer";
import Home from "../Home/Home";
import { ToastContainer } from "react-toastify";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export const Login_signup = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Signup" element={<Signup onSignup={handleLogin} />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? "/home" : "/Login"} />}
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
};
