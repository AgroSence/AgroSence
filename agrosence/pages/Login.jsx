import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource"; // Replace this with your actual resource imports
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        mobile: phone,
        password: password,
      });
      if (response.status === 200) {
        navigate("/Home");
      }
    } catch (error) {
      setErrorMessage("Invalid phone number or password.");
    }
  };

  return (
    <div className="main" style={{ minHeight: "100vh", backgroundColor: "#34a853", overflowY: "auto" }}>
      <div className="d-flex justify-content-end p-3">
        <Link to="/Signup">
          <button type="button" className="btn btn-light fs-6" style={{ color: "#252525", width: "120px" }}>Sign Up</button>
        </Link>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-md-row">
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-4">
          <img src={resource.Register.src} alt={resource.Register.alt} className="img-fluid" style={{ maxHeight: "40%" }} />
        </div>
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-4">
          <div className="container bg-white p-5 rounded shadow-lg" style={{ maxWidth: "500px" }}>
            <h2 className="text-center">Sign in</h2>
            <p className="text-center text-muted fs-4">Hey, Enter your details to login to your account</p>
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label fs-5">Enter Phone No.</label>
                <input type="text" id="phone" className="form-control fs-6" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fs-5">Password</label>
                <input type="password" id="password" className="form-control fs-6" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: "#34a853", color: "white" }}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
