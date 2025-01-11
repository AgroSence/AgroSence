import React from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { resource } from "../resource";
import "../src/App.css";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm text-white w-100 fixed-top"
      style={{ backgroundColor: "#252525", overflowX: "hidden" }}
    >
      <div className="container-fluid px-4">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center p-1" href="/">
          <img
            src={resource.Logo2.src}
            alt={resource.Logo2.alt}
            className="rounded-circle me-2"
            style={{ width: "48px", height: "auto" }}
          />
          <h4 className="logoname mb-0 text-white">
            <b>AgroSense</b>
          </h4>
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
            {['Home', 'Dashboard', 'Contact Us', 'About'].map((item) => (
              <li className="nav-item fs-5" key={item}>
                <a
                  className="nav-link position-relative text-white"
                  href={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                  style={{ textTransform: "capitalize" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Bar and User Profile */}
          <div className="d-flex align-items-center">
            <FaUserCircle className="me-3 rounded-circle" style={{ fontSize: "2.5rem" }} />
            <form className="d-flex align-items-center">
              <div className="input-group" style={{ width: "250px" }}>
                <span
                  className="input-group-text text-muted fs-5"
                  id="search-icon"
                  style={{
                    backgroundColor: "#F2F4F8",
                    borderTopLeftRadius: "25px",
                    borderBottomLeftRadius: "25px",
                    border: "1px solid #ccc",
                    borderRight: "none",
                    padding: "8px",
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
                    borderLeft: "none",
                    padding: "8px 12px",
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
