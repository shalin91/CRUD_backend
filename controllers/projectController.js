const express = require("express");
const Project = require("../models/Project");

// Add Project
const addProject = async (req, res) => {
    try {
      const { name, startDate , endDate, isDeleted } = req.body;
      const newProject = new Project({ name, startDate , endDate, isDeleted  });
      const savedProject = await newProject.save();
      res.json({success : true , data : savedProject});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Edit Project
  const editProject = async (req, res) => {
    try {
      const  id  = req.params.id;
      const {  name, startDate , endDate, isDeleted   } = req.body;
  
      const updatedProject = await Project.findByIdAndUpdate(
        id,
        {  name, startDate , endDate, isDeleted  },
        { new: true }
      );
  
      if (!updatedProject) {
        return res.status(404).json({ error: 'project not found' });
      }
  
      res.json({success:true, data : updatedProject});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete Project
  const deleteProject = async (req, res) => {
    try {
      const  id  = req.params.id;
      const deletedProject = await Project.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  
      if (!deletedProject) {
        return res.status(404).json({ error: 'project not found' });
      }
  
      res.json({success : true , msg:"Deleted Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get All User
  const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find().exec();
      res.json({data:projects});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Specific Project
  const getSpecificProject = async (req, res) => {
    try {
      const  id  = req.params.id;
      const project = await Project.findById(id);
  
      if (!project) {
        return res.status(404).json({ error: 'project not found' });
      }
  
      res.json({success : true , data:project});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addProject,
    editProject,
    deleteProject,
    getAllProjects,
    getSpecificProject,
  };