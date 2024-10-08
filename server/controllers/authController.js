const Admin = require("../models/adminSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (userId, secret, expiresIn) => {
  return jwt.sign({ userId }, secret, { expiresIn });
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const admin = await Admin.findOne({ email: email });
  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  console.log(admin.password);
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const adminToken = generateToken(
    admin.id,
    process.env.JWT_SECRET,
    process.env.JWT_EXPIRES_IN
  );

  res.cookie("adminUserToken", adminToken, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ message: "Login successful", adminToken });
};

const adminSignup = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    console.log("admin created", admin);
    await admin.save();

    res.status(201).json({ message: "admin created", admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adminLogout = (req, res) => {
  res.clearCookie("adminUserToken");
  res.json({ message: "Logout successful" });
};

module.exports = {
  adminLogin,
  adminSignup,
  adminLogout,
};
