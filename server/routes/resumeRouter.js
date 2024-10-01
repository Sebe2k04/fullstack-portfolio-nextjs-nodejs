const express = require("express");
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");
const {
  updateResume,
  createResume,
  getResume,
} = require("../controllers/resumeController");
const router = new express.Router();

router.get("/", getResume);
router.post("/", adminAuthMiddleware, createResume);
router.put("/:id", adminAuthMiddleware, updateResume);

module.exports = router;
