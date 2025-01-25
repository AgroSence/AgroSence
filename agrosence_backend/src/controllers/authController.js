const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    console.log("Received request body:", req.body);  // Log the incoming request

    const { name, mobile, password, state, address } = req.body;

    const newUser = new User({
      name,
      mobile,
      password,
      state,
      address,
    });

    await newUser.save();
    console.log("User saved successfully!");  // Log success
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error registering user:", err);  // Log detailed error
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};


exports.login = async (req, res) => {
    try {
        // Handle login logic
        res.status(200).json({ message: "User logged in successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};
