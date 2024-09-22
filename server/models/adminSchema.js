const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true,'email are in use'],
  },
  password: {
    type: String,
    required: true,
  },
});


const Admin = new mongoose.model("Admin", adminSchema);

module.exports = Admin;
