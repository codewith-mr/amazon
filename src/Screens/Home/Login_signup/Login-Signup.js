import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer/Footer";
import Home from "../Home/Home"; // Protected page (after login)
import { ToastContainer } from "react-toastify";

// Protected Route Component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export const Login_signup = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login function
  const handleLogin = () => {
    setIsAuthenticated(true); // Simulate login
  };

  // Mock logout function
  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate logout
  };

  return (
    <>
      <Routes>
        {/* Unauthenticated Routes */}
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login onLogin={handleLogin} />} />
        <Route path="/Signup" element={<Signup onSignup={handleLogin} />} />

        {/* Protected Route for Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Fallback for invalid paths */}
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
