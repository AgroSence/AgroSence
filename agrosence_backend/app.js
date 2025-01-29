const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
