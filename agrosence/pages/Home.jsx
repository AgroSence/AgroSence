import React from "react";
import Header from "../components/Header"; // Ensure the path is correct

function Home() {
  return (
    <div className="w-100" style={{backgroundColor: "#35a750" }}> {/* Same background as Login and Signup pages */}
      {/* Navbar at the top */}
      <Header />

    </div>
  );
}

export default Home;
