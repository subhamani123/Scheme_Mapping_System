const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// **User Signup**
exports.signup = async (req, res) => {
    const { fullName, emailOrPhone, password } = req.body;

    try {
        const existingUser = await User.findOne({ emailOrPhone });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, emailOrPhone, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// **User Login**
exports.login = async (req, res) => {
    const { emailOrPhone, password } = req.body;

    try {
        const user = await User.findOne({ emailOrPhone });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
