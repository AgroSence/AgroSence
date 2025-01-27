import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource"; // Replace this with your actual resource imports
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
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage(response.data.message);
      navigate("/"); // Redirect to login page on successful signup
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }    
  };

  return (
    <div className="main overflow-x-hidden" style={{ height: "100vh", backgroundColor: "#34a853" }}>
      <div className="w-100 d-flex justify-content-center align-items-center flex-column flex-md-row">
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-4">
          <img src={resource.Register.src} alt={resource.Register.alt} className="img-fluid" style={{ maxHeight: "70%" }} />
        </div>
        <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-md-3 mb-1">
          <div className="container bg-white p-5 rounded shadow m-auto" style={{ maxWidth: "500px" }}>
            <h2 className="text-center">Sign Up</h2>
            <p className="text-center text-muted fs-5">Enter your details to create a new account</p>
            {message && <p className="text-center text-info">{message}</p>}
            <form onSubmit={handleSubmit}>
              {["name", "mobile", "password", "confirmPassword", "state"].map((field) => (
                <div className="mb-1" key={field}>
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
              <div className="mb-1">
                <label htmlFor="address" className="form-label fs-6">Address</label>
                <textarea id="address" className="form-control fs-6" placeholder="Enter your address" rows="3" value={formData.address} onChange={handleChange} />
              </div>
              <button type="submit" className="btn w-100" style={{ backgroundColor: "#34a853", color: "white" }}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
