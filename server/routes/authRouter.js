const express = require("express");
const router = new express.Router();
const {
  adminLogin,
  adminSignup,
  adminLogout,
} = require("../controllers/authController");

router.post("/admin/login", adminLogin);

router.post("/admin/logout", adminLogout);

//create admin

router.post("/admin/signup", adminSignup);

module.exports = router;
