const mongoose = require("mongoose");

const personalDetailsSchema = new mongoose.Schema({
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    casteCategory: { type: String, required: true },
    profession: { type: String, required: true },
    studentCategory: { type: String }  // Only required if profession = "Student"
});

module.exports = mongoose.model("PersonalDetails", personalDetailsSchema);
