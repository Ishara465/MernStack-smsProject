const mongoose = require("mongoose");

const studentMGSchema = new mongoose.Schema({
  stName: {
    type: String,
    required: true,
  },
  stId: {
    type: String,
    required: true,
  },
  stConNumber: {
    type: String,
    required: true,
  },
  stDOB: {
    type: Date,
    required: true,
  },
  stAddress: {
    type: String,
    required: true,
  },
  stNic: {
    type: String,
    required: true,
  },
  stEmail: {
    type: String,
    required: true,
  },
  stAge: {
    type: String,
    required: true,
  },
});



 

const StudentModel = mongoose.model("studentMG", studentMGSchema);
module.exports = StudentModel;
