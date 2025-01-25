exports.signup = async (req, res) => {
    try {
      // Handle signup logic
      res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
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
  