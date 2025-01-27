import React, { useState } from "react";
import { resource } from "../resource";
import { FaPaperPlane } from "react-icons/fa"; // Send icon

const Chatbot = () => {
  const [isChatboxVisible, setIsChatboxVisible] = useState(false);
  const [message, setMessage] = useState(""); // Stores user's message
  const [isLoading, setIsLoading] = useState(false); // For showing the loading effect
  const [chatHistory, setChatHistory] = useState([]); // Stores the chat history

  // Toggle the visibility of the chatbox
  const handleChatbotClick = () => {
    setIsChatboxVisible(!isChatboxVisible);
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsLoading(true); // Start loading when user starts typing
  };

  // Handle sending the message
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message to chat history
      setChatHistory([...chatHistory, { sender: "user", message: message }]);
      setMessage(""); // Clear the input field after sending
      setIsLoading(true); // Set loading while bot is responding

      // Simulate chatbot response
      setTimeout(() => {
        let botMessage = "Hello"; // Basic response for "Hello"
        if (message.toLowerCase() === "hello") {
          botMessage = "Hello! How can I assist you today?";
        }
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { sender: "bot", message: botMessage },
        ]);
        setIsLoading(false); // Stop loading after bot replies
      }, 1500); // Delay the bot's reply for effect
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={handleChatbotClick}>
        <img
          src={resource.Chatbot1.src}
          alt={resource.Chatbot1.alt}
          className="chatbot-image"
        />
      </div>

      {/* Chatbox */}
      {isChatboxVisible && (
        <div
          className="chatbox p-0 h-50 rounded"
          style={{ width: "90%", maxWidth: "300px" }}
        >
          {/* Top Section - Logo and Title */}
          <div
            className="chatbox-header p-2"
            style={{ backgroundColor: "#009444" }}
          >
            <img
              src={resource.Chatbot.src}
              alt={resource.Chatbot.alt}
              className="chatbox-image"
            />
            <h3>AgroBot</h3>
          </div>
          {/* Body Section */}
          <div className="chatbox-body text-dark p-1">
            <p className="chat-message bot-message">
              Welcome! How can I assist you today?
            </p>
            {isLoading && <p className="loading">...</p>}{" "}
            {/* Show loading effect when typing */}
            {/* Display chat history */}
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`chat-message ${
                  chat.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {chat.sender === "bot" && (
                  <img
                    src={resource.Chatbot.src}
                    alt={resource.Chatbot.alt}
                    className="chatbox-image border border-2 border-success"
                  />
                )}
                <span>{chat.message}</span>
              </div>
            ))}
          </div>

          {/* Bottom Section - Input and Send Button */}
          <div className="chatbox-footer p-1">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message..."
              className="chatbox-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
