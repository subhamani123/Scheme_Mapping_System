const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    emailOrPhone: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
