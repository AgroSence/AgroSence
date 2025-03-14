const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Store image URL
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Resource = mongoose.model("Resource", ResourceSchema);
module.exports = Resource;
