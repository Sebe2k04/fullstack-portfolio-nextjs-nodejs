const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

require("dotenv").config();
require("./db/config");

const app = express();

const port = process.env.port || 5555;

const authRouter = require("./routes/authRouter");
const projectRouter = require("./routes/projectRouter");
const testimonialRouter = require("./routes/testimonialRouter");
const certificationRouter = require("./routes/certificationRouter");
const resumeRouter = require("./routes/resumeRouter");

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.use("/api/project",projectRouter);
app.use("/api/testimonial",testimonialRouter);
app.use("/api/certification",certificationRouter);
app.use("/api/resume",resumeRouter);


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
