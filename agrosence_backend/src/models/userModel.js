// src/models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { 
    type: String, 
    required: true, 
    unique: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v); // Ensures mobile number is exactly 10 digits
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  password: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("users", userSchema);

