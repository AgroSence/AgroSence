const express = require("express");
const { signup, login, getUsers } = require("../controllers/authController");

const User = require("../models/User");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        // Map the users to include `id` field and send the response
        const mappedUsers = users.map(user => ({
            id: user._id.toString(), // Map MongoDB _id to id
            name: user.name,
            mobile: user.mobile,
            state: user.state,
            address: user.address,
        }));

        res.status(200).json({ data: mappedUsers, total: mappedUsers.length });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
