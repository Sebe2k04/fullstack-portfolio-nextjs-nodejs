const Testimonials = require('../models/testimonialSchema')
const cloudinary = require("../config/cloudinary");

require("dotenv").config();

const createTestimonial = async (req, res) => {
  const { name, designation, rating, recommendation } = req.body;

  console.log( name, designation, rating, recommendation)
  try {
    let image;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      image = result.secure_url;

      console.log(result.secure_url);
    }

    const newTestimonial = new Testimonials({
      name,
      designation,
      rating,
      recommendation,
      image,
    });

    const testimonial = await newTestimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Error" });
  }
};

const getTestimonials = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  try {
    const testimonials = await Testimonials.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalTestimonials = testimonials.length;
    const totalPages = Math.ceil(totalTestimonials / limit);
    res.status(200).json({ testimonials, totalPages });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonials.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json({ message: "Testimonial deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createTestimonial, getTestimonials, deleteTestimonial };
