const express = require("express");
const User = require("../models/User");

// Add User
const addUser = async (req, res) => {
    try {
      const { name, email , phone, birthDate , isDeleted } = req.body;
      const newUser = new User({ name, email, phone, birthDate ,isDeleted  });
      const savedUser = await newUser.save();
      res.json({success : true , data : savedUser});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Edit User
  const editUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const {  name, email , phone, birthDate , isDeleted  } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {  name, email , phone, birthDate , isDeleted  },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success:true, data : updatedUser});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete User
  const deleteUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const deletedUser = await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success : true , msg:"User Deleted Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get All User
  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().exec();
      res.json({data:users});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Specific User
  const getSpecificUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success : true , data:user});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addUser,
    editUser,
    deleteUser,
    getAllUsers,
    getSpecificUser,
  };