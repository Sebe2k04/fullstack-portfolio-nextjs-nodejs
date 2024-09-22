const express = require("express");
const router = new express.Router();
const {
  createProject,
  updateProject,
  getProjects,
  deleteProject,
  getProjectById,
} = require("../controllers/projectController");

const upload = require("../middlewares/multer");

const adminAuthMiddleWare = require("../middlewares/adminAuthMiddleware");

router.post(
  "/",
  adminAuthMiddleWare,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "additionalImages", maxCount: 5 },
  ]),
  createProject
);

router.put(
  "/:id",
  adminAuthMiddleWare,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "additionalImages", maxCount: 3 },
  ]),
  updateProject
);

router.delete("/:id", adminAuthMiddleWare, deleteProject);

router.get("/", getProjects);

router.get("/:id", getProjectById);

module.exports = router;
