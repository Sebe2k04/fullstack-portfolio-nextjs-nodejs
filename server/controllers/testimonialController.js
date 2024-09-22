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
    res.status(201).json(testimonial)
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


