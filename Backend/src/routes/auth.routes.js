const express = require("express")
const authController = require("../controllers/auth.controller.js")
const identifyUser = require("../middlewares/auth.middleware.js")

const authRouter = express.Router()

/**
 *  POST /api/auth/register
*/
authRouter.post("/register",authController.registerController)

/**
 * POST /api/auth/login
*/
authRouter.post("/login", authController.loginController)

/**
 * GET /api/auth/get-me
*/

authRouter.get("/get-me",identifyUser, authController.getMeController )



module.exports = authRouter