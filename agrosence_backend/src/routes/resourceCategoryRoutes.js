const express = require("express");
const router = express.Router();
const Category = require("../models/ResourceCategory");

// Fetch only name and image for all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({}, "name image");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
});

// Fetch full details for a single category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category details" });
  }
});

// Add a new category
router.post("/add", async (req, res) => {
  try {
    const { name, image, description, howToUse, videoLinks } = req.body;
    const newCategory = new Category({ name, image, description, howToUse, videoLinks });
    await newCategory.save();
    res.status(201).json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error adding category" });
  }
});

// Update a category
router.put("/update/:id", async (req, res) => {
  try {
    const { name, image, description, howToUse, videoLinks } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, image, description, howToUse, videoLinks },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category updated successfully", category: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: "Error updating category" });
  }
});

// Delete a category
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
});

module.exports = router;
