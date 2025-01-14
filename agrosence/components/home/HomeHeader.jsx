import React from "react";
import { resource } from "../../resource";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${resource.WelcomeHomeImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
    zIndex: 1,
  };

  const textStyle = {
    position: "relative",
    zIndex: 2, // Places text above the overlay
  };

  return (
    <header style={headerStyle}>
      <div style={overlayStyle}></div> {/* Dark Overlay */}
      <div style={textStyle}>
        <h1>Welcome to the World of Agriculture</h1>
      </div>
    </header>
  );
};

export default Header;
