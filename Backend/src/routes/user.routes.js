const express = require("express")
const userController = require("../controllers/user.controller.js")
const identifyUser = require("../middlewares/auth.middleware.js");

const userRouter = express.Router();

/**
 * For following the user
 */
userRouter.post("/follow/:username",identifyUser,userController.followUserController)

/**
 * For Unfollowing the user
 */
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController)



module.exports = userRouter