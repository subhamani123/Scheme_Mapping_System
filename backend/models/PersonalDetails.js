const mongoose = require("mongoose");

const PersonalDetailsSchema = new mongoose.Schema({
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    casteCategory: { type: String, required: true },
    profession: { type: String, required: true },
    category: { type: String }, // optional
    domainOfInquiry: { type: String, required: true },
    povertyLineCategory: { type: String, required: true }, // ✅ updated here
    exServicemen: { type: Boolean, default: false },
    geoCategory: { type: String, required: true },
    physicallyDisabled: { type: Boolean, default: false },
    maritalStatus: { type: String, required: true }
});

module.exports = mongoose.model("PersonalDetails", PersonalDetailsSchema);
