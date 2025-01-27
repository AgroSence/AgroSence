const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const { name, mobile, password, state, address } = req.body;

    // Validate input
    if (!name || !mobile || !password || !state || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the phone number is unique
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "Mobile number already registered" });
    }

    // Save the new user
    const newUser = new User({
      name,
      mobile,
      password,
      state,
      address,
    });

    await newUser.save();
    console.log("User saved successfully!");
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error registering user:", err);
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
