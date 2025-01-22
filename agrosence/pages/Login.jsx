import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { resource } from "../resource";
import "../src/css/Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div
        className="main"
        style={{ minHeight: "100vh", backgroundColor: "#34a853", overflowY: "auto" }}
      >
        <div className="d-flex justify-content-end p-3">
          <Link to="/Signup">
            <button
              type="button"
              className="btn btn-light fs-6"
              style={{ color: "#252525", width: "120px" }}
            >
              Sign Up
            </button>
          </Link>
        </div>
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
              style={{
                maxHeight: "40%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Container: Form */}
          <div className="container w-100 w-md-50 d-flex justify-content-center align-items-center mt-4 mt-md-0">
            <div
              className="container bg-white p-5 rounded shadow-lg"
              style={{
                minWidth: "300px",
                maxWidth: "500px",
                height: "auto",
                marginTop: "2rem",
              }}
            >
              <h2 className="text-center">Sign in</h2>
              <p className="text-center text-muted fs-4">
                Hey, Enter your details to login to your account
              </p>

              <form>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fs-5">
                    Enter Phone No.
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control fs-6"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fs-5">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control fs-6"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100"
                  style={{ backgroundColor: "#34a853", color: "white" }}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
