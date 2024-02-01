const express = require("express");
const { addUser, getAllUsers, getSpecificUser, editUser, deleteUser } = require("../controllers/userController");


const router = express.Router();


// Routes
router.post("/adduser" , addUser);
router.get("/getusers" , getAllUsers);
router.get("/getuser/:id",getSpecificUser);
router.post("/edituser/:id",editUser);
router.post("/deleteuser/:id",deleteUser);


module.exports = router;