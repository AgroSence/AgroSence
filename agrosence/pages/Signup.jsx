import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource";
import "../src/css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    state: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialize navigate function

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      setMessage(response.data.message);

      // Redirect to Login page upon successful signup
      navigate("/");  // This will navigate to the Login page

    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div
      className="main overflow-x-hidden"
      style={{ height: "100vh", backgroundColor: "#34a853" }}
    >
      <div
        className="w-100 d-flex justify-content-center align-items-center flex-column flex-md-row"
        style={{ backgroundColor: "#34a853" }}
      >
        {/* Left Container: Image */}
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-4 mt-md-0">
          <img
            src={resource.Register.src}
            alt={resource.Register.alt}
            className="img-fluid"
            style={{ maxHeight: "70%", width: "auto" }}
          />
        </div>

        {/* Right Container: Form */}
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-md-3 mb-1">
          <div
            className="container bg-white p-5 rounded shadow m-auto"
            style={{
              minWidth: "300px",
              maxWidth: "500px",
              height: "auto",
            }}
          >
            <h2 className="text-center">Sign Up</h2>
            <p className="text-center text-muted fs-5">
              Enter your details to create a new account
            </p>

            {message && <p className="text-center text-info">{message}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fs-6">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control fs-6"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="form-label fs-6">
                  Mobile No.
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="form-control fs-6"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fs-6">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control fs-6"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fs-6">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control fs-6"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="state" className="form-label fs-6">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control fs-6"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label fs-6">
                  Address
                </label>
                <textarea
                  id="address"
                  className="form-control fs-6"
                  placeholder="Enter your address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#34a853", color: "white" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
