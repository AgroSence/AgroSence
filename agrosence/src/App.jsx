import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Feature from "../pages/Feature";
import Setting from "../pages/Setting";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import Chatbot from "../components/Chatbot";
import Products from "../pages/Product";
import OrderHistory from "../pages/OrderHistory";
import GovSchemes from "../pages/GovScheme";
import MarketAccess from "../pages/MarketAccess";
import { StateSchemes } from "../pages/StateWiseScheme";

// Function to check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; // Check if auth token exists
};

// ProtectedRoute Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideChatbotRoutes = ["/", "/Signup"]; // Hide chatbot on these routes

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route path="/Home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/About" element={<ProtectedRoute element={<About />} />} />
        <Route path="/ContactUs" element={<ProtectedRoute element={<Contact />} />} />
        <Route path="/Feature" element={<ProtectedRoute element={<Feature />} />} />
        <Route path="/features/government-schemes" element={<ProtectedRoute element={<GovSchemes />} />} />
        <Route path="/features/MarketAccess" element={<ProtectedRoute element={<MarketAccess />} />} />
        <Route path="/state-schemes/:stateName" element={<ProtectedRoute element={<StateSchemes />} />} />
        <Route path="/Setting" element={<ProtectedRoute element={<Setting />} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/product" element={<ProtectedRoute element={<Products />} />} />
        <Route path="/OrderHistory" element={<ProtectedRoute element={<OrderHistory />} />} />
      </Routes>

      {/* Conditionally render Chatbot */}
      {!hideChatbotRoutes.includes(location.pathname) && <Chatbot />}
    </>
  );
};

export default App;
