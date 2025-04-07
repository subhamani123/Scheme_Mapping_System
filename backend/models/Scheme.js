const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: String,
  gender: [String], // ["Male", "Female", "Other"]
  casteCategory: [String], // ["General", "SC", "ST", "OBC"]
  profession: [String], // ["Student", "Farmer", "Employee", "Unemployed"]
  exServicemen: Boolean,
  physicallyDisabled: Boolean,
  maritalStatus: [String], // ["Married", "Unmarried", "Widowed"]
  geographicalCategory: [String], // ["Urban", "Rural", "Tribal"]
  studentCategory: [String],
  domain: [String],
  ageRange: { min: Number, max: Number },
});

const Scheme = mongoose.model("Scheme", schemeSchema);

module.exports = Scheme;
