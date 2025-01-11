import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { gsap } from "gsap";
import LoginPage from "../pages/Login";
import "./App.css";
import SignupPage from "../pages/Signup";
import Home from "../pages/Home";
import About from "../pages/About";
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
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        delay: 1.2,
      }
    );

    // Set timeout for animation and then load the main content
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Reduced duration for better UX

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {isLoaded ? (
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      ) : (
        <div
          className="loading-screen d-flex flex-column justify-content-center align-items-center vh-100"
          style={{
            backgroundColor: "#252525",
            overflow: "hidden",
          }}
        >
          {/* Logo Animation */}
          <img
            src={resource.Logo2.src}
            alt={resource.Logo2.alt}
            className="logo rounded-circle"
            style={{ width: "180px", height: "180px" }}
          />
          <h1 className="app-name text-white mt-3 fs-3 text-center">
            {Array.from("AgroSense - An Agriculture Future").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
        </div>
      )}
    </Router>
  );
};

export default App;
