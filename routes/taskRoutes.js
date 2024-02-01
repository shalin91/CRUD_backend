const express = require("express");
const { getTasksByUserId, getTasksByProjectId, addTask, getAllTasks, getSpecificTask, editTask, deleteTask } = require("../controllers/taskController");




const router = express.Router();


// Routes
router.post("/addtask" , addTask);
router.get("/gettasks" , getAllTasks);
router.get("/gettask/:id",getSpecificTask);
router.get("/gettaskbyuser/:id",getTasksByUserId);
router.get("/gettaskbyproject/:id",getTasksByProjectId);
router.post("/edittask/:id",editTask);
router.post("/deletetask/:id",deleteTask);


module.exports = router;