import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource"; // Replace with actual resource imports
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      setMessage(response.data.message);
      navigate("/"); // Redirect to login page on successful signup
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${resource.Login.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row shadow rounded overflow-hidden bg-white" style={{ width: "55vw" }}>
        {/* Image Section */}
        <div
          className="col-md-6 d-none d-md-block position-relative p-0"
          style={{
            height: "auto",
            backgroundImage: `url(${resource.Register.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1px solid lightgray",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <h2
            className="fs-4 fw-bold text-center p-2 position-absolute w-100"
            style={{
              bottom: "0",
              background: "rgba(0, 0, 0, 0.4)",
              borderBottomLeftRadius: "10px",
              fontFamily: "martel",
              color: "white",
            }}
          >
            "Join us and grow your farm!" 🌿🚜
          </h2>
        </div>

        {/* Form Section */}
        <div
          className="col-md-6 bg-white p-4 d-flex flex-column justify-content-center"
          style={{
            border: "1px solid lightgray",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <h2 className="text-center">Sign Up</h2>
          <p className="text-center text-muted fs-5">
            Enter your details to create a new account
          </p>
          {message && <p className="text-center text-info">{message}</p>}
          <form onSubmit={handleSubmit}>
            {[
              "name",
              "mobile",
              "password",
              "confirmPassword",
              "state",
            ].map((field) => (
              <div className="mb-2" key={field}>
                <label htmlFor={field} className="form-label fs-6">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  id={field}
                  className="form-control fs-6"
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="mb-2">
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
  );
};

export default SignUpPage;