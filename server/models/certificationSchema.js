const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Certifications = new mongoose.model(
  "Certifications",
  certificationSchema
);
module.exports = Certifications;
