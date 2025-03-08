const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true }, // ✅ Auto-generated user ID
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    state: { type: String, required: true },
    address: { type: String, required: true },
    language: { type: String, required: true }
});

// Auto-generate `userId` before saving a new user
userSchema.pre("save", async function (next) {
    if (!this.userId) {
        const count = await mongoose.model("Agro_user").countDocuments();
        this.userId = `agroUser${count}`;
    }
    next();
});

module.exports = mongoose.model("Agro_user", userSchema);
