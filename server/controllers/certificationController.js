const cloudinary = require("../config/cloudinary");
const Certifications = require("../models/certificationSchema");

require("dotenv").config();

const createCertification = async (req, res) => {
  const { name, provider, skills, url } = req.body;
  try {
    let image;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      image = result.secure_url;
    }

    const newCertification = new Certifications({
      name,
      provider,
      skills,
      url,
      image,
    });
    console.log(newCertification);
    const savedCertification = await newCertification.save();
    res.status(201).json(savedCertification);
  } catch (error) {
    res.status(500).json({ message: "Error creating certification", error });
  }
};

const updateCertification = async (req, res) => {
  try {
    const { name, provider, skills, url } = req.body;

    console.log(title, subtitle, skills, description, githubUrl, liveUrl);
    const certification = await Certifications.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }
    console.log(certification.image);

    console.log(req.files.image);
    if (req.file) {
      if (certification.image) {
        const publicId = certification.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: process.env.CLOUDINARY_FOLDER_NAME,
      });
      certification.image = result.secure_url;
    }

    certification.name = name || certification.name;
    certification.skills = skills || certification.skills;
    certification.provider = provider || certification.provider
    certification.url = url || certification.url


    const updatedCertification = await certification.save();
    res.json(updatedCertification);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const certification = await Certifications.findByIdAndDelete({ _id: req.params.id });
    console.log(certification);
    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }
    res.json({ message: "Certification removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getCertifications = async (req, res) => {
  const { search, page = 1, limit = 8 } = req.query;
  try {
    console.log(search, "s", page, limit);
    const query = {};
    if (search) {
      console.log("s");
      query.title = { $regex: search, $options: "i" };
    }
    const certifications = await Certifications.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const totalCertifications = await Certifications.countDocuments(query);
    const totalPages = Math.ceil(totalCertifications / limit);
    res.status(200).json({ certifications, totalPages });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

const getCertificationById = async (req, res) => {
  try {
    const certification = await Certifications.findById(req.params.id);

    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }
    res.json(certification);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
    createCertification,
    updateCertification,
    deleteCertification,
    getCertifications,
    getCertificationById
};

