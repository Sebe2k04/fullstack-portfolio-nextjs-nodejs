const Testimonial = require("../models/projectSchema");

const createTestimonial = async (req, res) => {
  const { name, designation, rating, recommendation } = req.body;

  try {
    let image;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      image = result.secure_url;

      console.log(result.secure_url);
    }

    const newTestimonial = new Testimonial({
      name,
      designation,
      rating,
      recommendation,
      image,
    });

    const testimonial = await newTestimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete({
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
