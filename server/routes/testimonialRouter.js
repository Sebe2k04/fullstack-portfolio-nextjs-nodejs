const express = require("express");
const router = new express.Router();

const {
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.post("/", createTestimonial);

router.get("/", getTestimonials);

router.delete("/:id", deleteTestimonial);


module.exports = router;