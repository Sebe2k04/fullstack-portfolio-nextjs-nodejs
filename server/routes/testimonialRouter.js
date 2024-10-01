const express = require("express");
const router = new express.Router();
const upload = require("../middlewares/multer");

const {
  createTestimonial,
  getTestimonials,
  deleteTestimonial,
} = require("../controllers/testimonialController");

router.post("/",  upload.single("image"), createTestimonial);

router.get("/", getTestimonials);

router.delete("/:id", deleteTestimonial);


module.exports = router;