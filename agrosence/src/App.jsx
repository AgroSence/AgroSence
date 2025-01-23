import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); // Get the current location
  const hideChatbotRoutes = ["/", "/Signup"]; // Define routes where Chatbot should be hidden

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>

      {/* Conditionally render Chatbot */}
      {!hideChatbotRoutes.includes(location.pathname) && <Chatbot />}
    </>
  );
};

export default App;
