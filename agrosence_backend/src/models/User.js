const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    state: { type: String },
    address: { type: String },
});

module.exports = mongoose.model("Agro_user", UserSchema);
