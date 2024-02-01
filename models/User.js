const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
    },
    email: {
      type: String,  
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);




const User = mongoose.model("User", userSchema);

module.exports = User;
