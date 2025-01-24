const mongoose = require('mongoose');
const crypto = require('crypto');

// User Schema
const userSchema = new mongoose.Schema({
  phoneNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
});

// Hash the password before saving it
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  // Generate a salt and hash the password
  const salt = crypto.randomBytes(16).toString('hex');
  const hashedPassword = crypto.pbkdf2Sync(this.password, salt, 1000, 64, 'sha512').toString('hex');
  this.password = hashedPassword;
  this.salt = salt;

  next();
});

// Compare hashed password (used during login)
userSchema.methods.comparePassword = function (candidatePassword) {
  const hash = crypto.pbkdf2Sync(candidatePassword, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.password === hash;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
