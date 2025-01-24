// controllers/userController.js
const User = require("../models/user");
const crypto = require("crypto"); // Built-in Node.js module for hashing

// Function to hash the password using crypto
const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

// Signup Logic
const signup = async (req, res) => {
  const { name, mobile, password, state, address } = req.body;
  try {
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = hashPassword(password);

    const newUser = new User({
      name,
      mobile,
      password: hashedPassword,
      state,
      address,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Login Logic
const login = async (req, res) => {
  const { mobile, password } = req.body;
  try {
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const hashedEnteredPassword = hashPassword(password);
    if (hashedEnteredPassword !== user.password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

module.exports = { signup, login };
