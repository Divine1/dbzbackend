const express = require("express")
const UserManagementController = require("./../controller/usermanagement.controller")
const router = express.Router();

router.get("/create",UserManagementController.create)

router.get("/users",UserManagementController.fetchUsers)


module.exports=router

