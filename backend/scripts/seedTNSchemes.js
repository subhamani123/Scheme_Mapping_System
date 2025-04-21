const mongoose = require("mongoose");
const Scheme = require("../models/Scheme"); // Make sure the path is correct

// Tamil Nadu Student Schemes
const tnStudentSchemes = [
  {
    title: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme",
    description: "₹1000 monthly incentive for girl students from government schools pursuing higher education.",
    eligibilityCriteria: {
      gender: "Female",
      profession: "Student",
      geoCategory: "Any",
      casteCategory: "Any",
      studentCategory: "Government School",
      domainOfInquiry: "Higher Education",
    }
  },
  {
    title: "Free Bicycle Scheme",
    description: "Free bicycles for students studying in Government and Government-aided schools (Classes 11 & 12).",
    eligibilityCriteria: {
      profession: "Student",
      domainOfInquiry: "School",
      studentCategory: "Government School",
    }
  },
  {
    title: "Chief Minister's Merit Scholarship",
    description: "Scholarship for top-scoring 10th & 12th students in state board exams.",
    eligibilityCriteria: {
      profession: "Student",
      studentCategory: "Meritorious",
      domainOfInquiry: "Higher Secondary",
    }
  },
  {
    title: "Perarignar Anna Memorial Scholarship",
    description: "₹6000 annually for engineering students from government higher secondary schools.",
    eligibilityCriteria: {
      profession: "Student",
      domainOfInquiry: "Engineering",
      studentCategory: "Government School",
      casteCategory: "Any",
    }
  },
  {
    title: "Post Matric Scholarship (SC/ST)",
    description: "Reimbursement of fees for SC/ST students in post-matric classes in Tamil Nadu.",
    eligibilityCriteria: {
      casteCategory: "SC",
      profession: "Student",
      domainOfInquiry: "Any",
    }
  },
  {
    title: "Scholarship for Children of Farmers",
    description: "Financial aid for students whose parents are registered farmers in Tamil Nadu.",
    eligibilityCriteria: {
      profession: "Student",
      parentProfession: "Farmer",
      domainOfInquiry: "Higher Education",
    }
  }
];

// MongoDB connection
const MONGO_URI = "mongodb://localhost:27017/authDB"; // Update this if needed

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    await Scheme.deleteMany({});
    console.log("🗑️ Existing schemes removed.");

    await Scheme.insertMany(tnStudentSchemes);
    console.log("✅ Tamil Nadu Student Schemes inserted successfully!");

    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  } catch (err) {
    console.error("❌ Error seeding database:", err.message);
    process.exit(1);
  }
};

seedDatabase();
