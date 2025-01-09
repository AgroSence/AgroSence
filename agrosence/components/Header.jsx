import React from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { resource } from "../resource";
import "../src/App.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm text-white"
      style={{backgroundColor: "#252525"}}
    >
      <div className="container-fluid ">
        {/* Logo Section */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="/"
        >
          <img
            src={resource.Logo2.src} // Replace with your actual logo path
            alt={resource.Logo2.alt} // Replace with your actual logo alt text
            className="rounded-circle me-2"
            style={{ width: "48px", height: "auto" }}
          />
          <h4 className="logoname mb-0 text-white" ><b>AgroSense</b></h4>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler text-white bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item fs-5 ">
              <a
                className="nav-link  position-relative text-white"
                href="/"
                style={{ textTransform: "capitalize" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item fs-5">
              <a
                className="nav-link  position-relative text-white"
                href="/dashboard"
                style={{ textTransform: "capitalize" }}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item fs-5">
              <a
                className="nav-link  position-relative text-white"
                href="/contact"
                style={{ textTransform: "capitalize" }}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item fs-5">
              <a
                className="nav-link  position-relative text-white"
                href="/about"
                style={{ textTransform: "capitalize" }}
              >
                About
              </a>
            </li>
          </ul>

          {/* Search Bar and User Profile */}
          <div className="d-flex align-items-center flex-wrap">
            {/* User Profile */}
            <div className="d-flex align-items-center ">
              <FaUserCircle
                className="me-2 rounded-circle"
                style={{ fontSize: "2.5rem" }}
              />
            </div>

            {/* Search Bar */}
            <form className="d-flex align-items-center me-3">
              <div className="input-group" style={{ width: "300px"}}>
                {/* Search icon */}
                <span
                  className="input-group-text text-muted fs-5"
                  id="search-icon"
                  style={{
                    backgroundColor: "#F2F4F8",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    border: "1px solid #ccc",
                    borderRight: "none", // Remove line between icon and input
                    padding: "8px", // Adjust padding to reduce the gap
                  }}
                >
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-icon"
                  style={{
                    backgroundColor: "#F2F4F8",
                    borderTopRightRadius: "25px",
                    borderBottomRightRadius: "25px",
                    border: "1px solid #ccc",
                    borderLeft: "none", // Remove line between input and icon
                    padding: "8px 12px", // Adjust padding for a clean look
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
