const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new mongoose.Schema(
  {
   
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  
    },
    name: {
      type: String,
    },
    dueDate:{
      type : Date
    },
    isActive:{
        type: Boolean,
      default: true,
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




const Task = mongoose.model("Task", userSchema);

module.exports = Task;
