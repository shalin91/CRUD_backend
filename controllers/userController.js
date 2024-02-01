const express = require("express");
const User = require("../models/User");

// Add Location
const addUser = async (req, res) => {
    try {
      const { name, email , password, isActive } = req.body;
      const newUser = new User({ name, email, password, isActive });
      const savedUser = await newUser.save();
      res.json({success : true , data : savedUser});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Edit Location
  const editUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const { name, email , password, isActive } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email , password, isActive },
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
  
  // Delete Location
  const deleteUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success : true , msg:"User Deleted Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get All Locations
  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().exec();
      res.json({data:users});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Specific Location
  const getSpecificUser = async (req, res) => {
    try {
      const  id  = req.params.id;
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: 'Location not found' });
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