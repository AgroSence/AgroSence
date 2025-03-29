const express = require("express");
const multer = require("multer");
const Crop = require("../models/CropModel");
const User = require("../models/User");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params; // ✅ Get user ID from request params
        const user = await User.findById(id).select("-password"); // ✅ Exclude password

        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// POST - Add new crop listing
router.post("/add", upload.array("cropImages", 4), async (req, res) => {
    try {
        const { cropName, cropDescription, cropCategory, cropSellingPrice, cropUnit, cropQuantity, grownOrganically, userId } = req.body;

        const seller = await User.findById(userId);
        if (!seller) return res.status(404).json({ message: "Seller not found" });

        const cropImages = req.files.map(file => `/uploads/${file.filename}`);

        const newCrop = new Crop({
            cropName,
            cropDescription,
            cropCategory,
            cropSellingPrice,
            cropUnit,
            cropQuantity,
            grownOrganically: grownOrganically === "true" ? "Yes" : "No",
            cropImages,
            userId
        });

        await newCrop.save();
        res.status(201).json({ message: "Crop added successfully", crop: newCrop });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// GET - Fetch all available crops
router.get("/", async (req, res) => {
    try {
        const crops = await Crop.find({ cropStatus: "Available" }).populate("userId", "name mobile state address");
        res.json(crops);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

// GET - Fetch a specific crop by ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params; // Get crop ID from URL params
        const crop = await Crop.findById(id).populate("userId", "name mobile state address");

        if (!crop) {
            return res.status(404).json({ message: "Crop not found" });
        }

        res.status(200).json(crop);
    } catch (error) {
        console.error("Error fetching crop:", error);
        res.status(500).json({ message: "Server Error", error });
    }
});

// PUT - Mark crop as sold
router.put("/sell/:id", async (req, res) => {
    try {
        const crop = await Crop.findById(req.params.id);
        if (!crop) return res.status(404).json({ message: "Crop not found" });

        crop.cropStatus = "Sold";
        await crop.save();

        res.json({ message: "Crop marked as sold", crop });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
});

module.exports = router;
