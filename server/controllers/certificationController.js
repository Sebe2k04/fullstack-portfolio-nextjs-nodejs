const cloudinary = require("../config/cloudinary");
const Certifications = require("../models/certificationSchema");

require("dotenv").config();

const createCertification = async (req, res) => {
  const { name, provider, skills, url, level } = req.body;
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
      level,
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
    const { name, provider, skills, url, level } = req.body;

    console.log(name, provider, skills, url, level);
    const certification = await Certifications.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: "Certification not found" });
    }
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
    certification.provider = provider || certification.provider;
    certification.url = url || certification.url;
    certification.level = level || certification.level;

    const updatedCertification = await certification.save();
    res.json(updatedCertification);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const certification = await Certifications.findByIdAndDelete({
      _id: req.params.id,
    });
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
  const { search="", page = 1, limit = 8 } = req.query;
  try {
    console.log(search, "sc", page, limit);
    const query = {};
    if (search) {
      console.log("s");
      query.name = { $regex: search, $options: "i" };
    }
    const levelOrder = {
      advanced: 1,
      intermediate: 2,
      basic: 3,
    };

    const limits = parseInt(limit)
    const skip = (page - 1) * limit;

    const certifications = await Certifications.aggregate([
      {
        $match: {
          name: { $regex: search, $options: "i" },
        },
      },
      {
        $addFields: {
          sortOrder: {
            $switch: {
              branches: [
                { case: { $eq: ["$level", "advanced"] }, then: 1 },
                { case: { $eq: ["$level", "intermediate"] }, then: 2 },
                { case: { $eq: ["$level", "basic"] }, then: 3 },
              ],
              default: 4,
            },
          },
        },
      },
      { $sort: { sortOrder: 1 } },
      { $skip: skip },
      { $limit: limits },
    ]);
    const totalCertifications = certifications.length;
    const totalPages = Math.ceil(totalCertifications / limit);
    res.status(200).json({ certifications, totalPages });
  } catch (error) {
    console.log(error);
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
  getCertificationById,
};
