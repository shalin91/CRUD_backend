const express = require("express");
const Task = require("../models/Task");
const { ObjectId } = require("mongodb");


// Add Task
const addTask = async (req, res) => {
    try {
      const { name, projectId, userId, dueDate, isDeleted, isActive } = req.body;
  
      const projectObjectId = new ObjectId(projectId);
      const userObjectId = new ObjectId(userId);
  
      const newTask = new Task({ name, projectId: projectObjectId, userId:userObjectId, dueDate, isDeleted, isActive });
      const savedTask = await newTask.save();
  
      res.json({ success: true, data: savedTask });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Edit Task
  const editTask = async (req, res) => {
    try {
      const  id  = req.params.id;
      const {  name, projectId, userId, dueDate, isDeleted, isActive   } = req.body;

      const projectObjectId = new ObjectId(projectId);
      const userObjectId = new ObjectId(userId);
  
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { name, projectId :projectObjectId , userId : userObjectId, dueDate, isDeleted, isActive  },
        { new: true }
      );
  
      if (!updatedTask) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success:true, data : updatedProject});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete Task
  const deleteTask = async (req, res) => {
    try {
      const  id  = req.params.id;
      const deletedTask = await Task.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  
      if (!deletedProject) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success : true , msg:"Deleted Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get All Tasks
  const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find().populate([
        { path: 'projectId', select: 'name' },
        { path: 'userId', select: 'name' },
      ]).exec();
      res.json({data:tasks});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Specific Task
  const getSpecificTask = async (req, res) => {
    try {
      const  id  = req.params.id;
      const task = await Task.findById(id);
  
      if (!task) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({success : true , data:task});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Get Tasks by User ID
const getTasksByUserId = async (req, res) => {
    try {
      const userId = req.params.id;
      const userObjectId = new ObjectId(userId);
  
      const tasks = await Task.find({ userId: userObjectId }).exec();
      res.json({ data: tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get Tasks by Project ID
  const getTasksByProjectId = async (req, res) => {
    try {
      const projectId = req.params.id;
      const projectObjectId = new ObjectId(projectId);
  
      const tasks = await Task.find({ projectId: projectObjectId }).exec();
      res.json({ data: tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addTask,
    editTask,
    deleteTask,
    getAllTasks,
    getSpecificTask,
    getTasksByProjectId,
    getTasksByUserId
  };