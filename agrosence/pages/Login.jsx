import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsCheck2Square } from "react-icons/bs";
import loadingGif from "../src/assets/Chatbot2.gif";
import { resource } from "../resource";

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          mobile: phone,
          password: password,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        navigate("/Home");
      }
    } catch (error) {
      setErrorMessage("Invalid phone number or password.");
    }
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center ">
      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img
            src={loadingGif}
            alt="Loading..."
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ) : (
        <div className="row w-100 h-100">
          <div
            className="col-12 col-md-6 p-4 d-flex flex-column"
            style={{
              height: "600px",
              border: "1px solid lightgray",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <div className="mb-4 text-center">
              <img
                src={resource.Logo4.src}
                alt="AgroSence Logo"
                style={{ width: "150px" }}
              />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-2 text-center">
                Welcome back to <span className="text-success">AgroSence</span>
              </h1>
              <h2 className="mb-4 text-center">Login</h2>
              {errorMessage && (
                <p className="text-danger text-center">{errorMessage}</p>
              )}
              <form
                onSubmit={handleLogin}
                style={{ maxWidth: "450px", width: "100%" }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn position-absolute end-0 top-50 translate-middle-y bg-transparent border-0"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input visually-hidden"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label
                      className="form-check-label d-flex align-items-center"
                      htmlFor="rememberMe"
                    >
                      {rememberMe ? (
                        <BsCheck2Square className="text-success me-2" />
                      ) : (
                        <div
                          className="me-2"
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "1px solid black",
                            borderRadius: "3px",
                          }}
                        ></div>
                      )}
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-success text-decoration-none">
                    Forget Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100 btn-lg mb-3"
                >
                  Login
                </button>
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/Signup"
                    className="text-success text-decoration-none"
                  >
                    Get Started
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div
            className="col-md-6 d-none d-md-block position-relative p-0"
            style={{
              height: "600px",
              backgroundImage: `url(${resource.Login.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid lightgray",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <h2
              className="fs-4 fw-bold text-center position-absolute w-100 p-4"
              style={{
                bottom: "0",
                fontFamily: "martel",
                background: "rgba(0, 0, 0, 0.4)",
                color: "white",
              }}
            >
              "Farm the land, feed the world." 🌾🌍
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
