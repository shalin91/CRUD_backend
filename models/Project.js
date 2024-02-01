const mongoose = require("mongoose");
const { Schema } = mongoose;


const projectSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
    },
    startDate:{
        type: Date
    },
    endDate:{
        type : Date
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const Project = mongoose.model("project", projectSchema);

module.exports = Project;
