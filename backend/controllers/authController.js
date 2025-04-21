const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// **User Signup**
// **User Signup**
exports.signup = async (req, res) => {
  try {
    const { fullName, emailOrPhone, password, confirmPassword } = req.body;

    // Log the request body
    console.log("Signup Request:", req.body);

    // Validation
    if (!fullName || !emailOrPhone || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if emailOrPhone is a valid email or phone number (not empty)
    if (!emailOrPhone || emailOrPhone.trim() === "") {
      return res.status(400).json({ message: "Email or Phone is required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existing = await User.findOne({ emailOrPhone });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      fullName,
      emailOrPhone,
      password: hashedPassword
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// **User Login**
exports.login = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({ emailOrPhone });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        emailOrPhone: user.emailOrPhone,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
