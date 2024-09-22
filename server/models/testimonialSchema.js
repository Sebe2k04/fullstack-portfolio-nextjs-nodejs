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
    recommendation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = new mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
