const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const personalRoutes = require("./routes/personalRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const faqRoutes = require("./routes/faqRoutes");
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.use("/api/auth", authRoutes);
app.use("/api/personal", personalRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/faqs", faqRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
