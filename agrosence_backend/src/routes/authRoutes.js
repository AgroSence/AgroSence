const express = require("express");
const { signup, login } = require("../controllers/authController"); // Removed getUsers since it's defined here
const authController = require("../controllers/authController");
const User = require("../models/User");
const router = express.Router();

// ✅ GET all users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        // Map users to include `id` instead of `_id`
        const mappedUsers = users.map(user => ({
            id: user._id.toString(), // Convert MongoDB _id to id
            name: user.name,
            mobile: user.mobile,
            state: user.state,
            address: user.address,
        }));

        res.status(200).json({ data: mappedUsers, total: mappedUsers.length });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});


router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully", data: { id } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/user", authController.getUserProfile);  // ✅ Change `post` to `get`
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
