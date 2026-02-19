const express = require("express")
const userController = require("../controllers/user.controller.js")
const identifyUser = require("../middlewares/auth.middleware.js");

const userRouter = express.Router();

userRouter.post("/follow/:username",identifyUser,userController.followUserController)


module.exports = userRouter