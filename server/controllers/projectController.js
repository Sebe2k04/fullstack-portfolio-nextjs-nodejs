const Projects = require("../models/projectSchema");
const cloudinary = require("../config/cloudinary");

require("dotenv").config();

const createProject = async (req, res) => {
    const { title, subtitle, skills, description, githubUrl, liveUrl } = req.body;
    try {
      const imageResult = await cloudinary.uploader.upload(
        req.files.image[0].path,
        {
          folder: process.env.CLOUDINARY_FOLDER_NAME,
        }
      );
  
      let additionalImages = [];
      if (req.files.additionalImages) {
        const additionalImagesUploadPromises = req.files.additionalImages.map(
          (img) =>
            cloudinary.uploader.upload(img.path, {
              folder: process.env.CLOUDINARY_FOLDER_NAME,
            })
        );
        const additionalImagesResults = await Promise.all(
          additionalImagesUploadPromises
        );
        additionalImages = additionalImagesResults.map(
          (result) => result.secure_url
        );
  
        const newProject = new Projects({
          title,
          subtitle,
          skills,
          description,
          image: imageResult.secure_url,
          additionalImages,
          githubUrl,
          liveUrl,
        });
        console.log(newProject);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
      }
    } catch (error) {
      res.status(500).json({ message: "Error creating project", error });
    }
  };