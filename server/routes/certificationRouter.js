const express = require("express");
const router = new express.Router();
const {
  createCertification,
  updateCertification,
  deleteCertification,
  getCertifications,
  getCertificationById,
} = require("../controllers/certificationController");

const upload = require("../middlewares/multer");

const adminAuthMiddleWare = require("../middlewares/adminAuthMiddleware");

router.post(
  "/",
  adminAuthMiddleWare,
  upload.single("image"),
  createCertification
);

router.put(
  "/:id",
  adminAuthMiddleWare,
  upload.single("image"),
  updateCertification
);

router.delete("/:id", adminAuthMiddleWare, deleteCertification);

router.get("/", getCertifications);

router.get("/:id", getCertificationById);

module.exports = router;
