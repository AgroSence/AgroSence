const mongoose = require('mongoose');

// MongoDB URI
const uri = "mongodb+srv://workwithdhruv05:agrosence@agrosencecluster.1cxr0.mongodb.net/?retryWrites=true&w=majority&appName=AgrosenceCluster";

// Function to connect to MongoDB
const connectToDatabase = async () => {
  try {
    // Connecting to MongoDB
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectToDatabase;
