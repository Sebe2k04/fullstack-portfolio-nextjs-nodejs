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

const updateProject = async (req, res) => {
  try {
    const { title, subtitle, skills, description, githubUrl, liveUrl } = req.body;

    const project = await Projects.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    console.log(project.image);



    console.log(req.files.image);
    if (req.files.image) {
      if (project.image) {
        const publicId = project.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      }
      const imageResult = await cloudinary.uploader.upload(
        req.files.image[0].path
      );
      project.image = imageResult.secure_url;
    }

    if (req.files.additionalImages) {
      if (project.additionalImages.length > 0) {
        for (let image of project.additionalImages) {
          console.log(image);
          const publicId = image.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(publicId);
        }
      }
      const additionalImagesUploadPromises = req.files.additionalImages.map(
        (img) => cloudinary.uploader.upload(img.path)
      );
      const additionalImagesResults = await Promise.all(
        additionalImagesUploadPromises
      );
      project.additionalImages = additionalImagesResults.map(
        (result) => result.secure_url
      );
    }

    project.title = title || project.title;
    project.subtitle = subtitle || project.subtitle;
    project.skills = skills || project.skills;
    project.description = description || project.description;
    project.githubUrl = githubUrl || project.githubUrl;
    project.liveUrl = liveUrl || project.liveUrl;


    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};




