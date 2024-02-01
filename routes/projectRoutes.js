const express = require("express");
const { addProject, getAllProjects, getSpecificProject, editProject, deleteProject } = require("../controllers/projectController");



const router = express.Router();


// Routes
router.post("/addproject" , addProject);
router.get("/getprojects" , getAllProjects);
router.get("/getproject/:id",getSpecificProject);
router.post("/editproject/:id",editProject);
router.post("/deleteproject/:id",deleteProject);


module.exports = router;