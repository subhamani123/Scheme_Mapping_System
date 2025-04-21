// models/Scheme.js
const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  eligibilityCriteria: {
    gender: String,
    casteCategory: String,
    profession: String,
    studentCategory: String,
    domainOfInquiry: String,
    category: String,
    exServicemen: Boolean,
    geoCategory: String,
    physicallyDisabled: Boolean,
    maritalStatus: String,
  },
});

module.exports = mongoose.model("Scheme", schemeSchema);
