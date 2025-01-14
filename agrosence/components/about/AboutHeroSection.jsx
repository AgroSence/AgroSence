import React from "react";
import { resource } from "../../resource";

const HeroSection = () => {
  return (
    <div
      className="hero-section position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${resource.AboutHeader.src})`,
        backgroundSize: "contain",
        height: "400px",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      ></div>
      <h1 className="text-white position-relative display-2 fw-bold">
        About Us
      </h1>
    </div>
  );
};

export default HeroSection;
