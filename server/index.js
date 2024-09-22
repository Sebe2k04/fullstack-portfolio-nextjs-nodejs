const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')

require("dotenv").config();
require("./db/config");

const app = express();

const port = process.env.port || 5555;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})