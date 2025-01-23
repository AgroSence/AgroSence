// src/components/Chatbot.js
import React from "react";
import { resource } from "../resource";
// import "./Chatbot.css";

const Chatbot = () => {
  const handleChatbotClick = () => {
    alert("Chatbot is clicked!");
  };

  return (
      <div className="chatbot-button" onClick={handleChatbotClick}>
        <img src={resource.Chatbot1.src} alt={resource.Chatbot1.alt} className="chatbot-image" />
    </div>
  );
};

export default Chatbot;
