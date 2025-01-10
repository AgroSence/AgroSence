import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { gsap } from "gsap"; // Import GSAP
import LoginPage from "../pages/Login";
import './App.css'
import SignupPage from "../pages/Signup";
import Home from "../pages/Home"
import { resource } from "../resource";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // GSAP animation for the logo
    gsap.fromTo(
      ".logo", 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
    );

    // GSAP staggered animation for each letter of the app name
    gsap.fromTo(
      ".app-name span", 
      { opacity: 0, y: -50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        delay: 1.5 // Delay start after logo animation
      }
    );

    // Set timeout for animation and then load the login/signup page
    setTimeout(() => {
      setIsLoaded(true);
    }, 5200); // Total animation duration (27.3 seconds)
  }, []);
  
  return (
    <Router>
      {isLoaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      ) : (
        <div className="loading-screen">
          {/* Logo Animation */}
          <img
            src={resource.Logo2.src}
            alt={resource.Logo2.alt}
            className="logo rounded-circle"
            style={{ width: "auto", height: "200px" }} // Adjust size as necessary
          />
          <h1 className="app-name fs-1">
            {Array.from("AgroSence - An Agriculture Future").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
        </div>
      )}
    </Router>
  );
};

export default App;