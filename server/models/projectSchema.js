const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    additionalImages: {
      type: [String],
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
    },
    LiveUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Products = new mongoose.model("Products", productSchema);
module.exports = Products;
