const express = require("express");
const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "User profile accessed!", user: req.user });
});

module.exports = router;
