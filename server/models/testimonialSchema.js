const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    image: {
      type: String,
      default:"https://res.cloudinary.com/ded1o1e26/image/upload/v1726984757/2150709796_ojmxov.jpg"
    },
    recommendation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonials = new mongoose.model("Testimonials", testimonialSchema);

module.exports = Testimonials;
