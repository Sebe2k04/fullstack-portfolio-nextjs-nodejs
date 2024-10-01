const Resume = require("../models/resumeSchema");

const createResume = async (req, res) => {
  try {
    const name = "sample";
    const link = "NA";
    const resume = new Resume({
      name,
      link,
    });
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const updateResume = async (req, res) => {
    try {
      const { name, link } = req.body;
      const resume = await Resume.findByIdAndUpdate(req.params.id, {
        name,
        link,
      });
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      res.json(resume);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  
};


const getResume = async(req,res) => {
    try {
      const resume = await Resume.find();
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }
      res.json(resume);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
}  

module.exports = {
  createResume,
  updateResume,
  getResume
};
