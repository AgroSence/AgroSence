import React from "react";
import { resource } from "../../resource";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${resource.WelcomeHomeImg.src})`, // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "300px", // Adjust as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
    textAlign: "center",
  };

  return (
    <header style={headerStyle} className="overflow-x-hidden">
      <div>
        <h1>Welcome to the world of Agriculture</h1>
      </div>
    </header>
  );
};

export default Header;
