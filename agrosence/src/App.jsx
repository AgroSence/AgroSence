import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes and Route
import LoginPage from "../pages/Login"; // Assuming LoginPage is in the same directory
import SignupPage from "../pages/Signup"; // Assuming SignupPage is in the same directory

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
