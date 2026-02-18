const express = require("express")
const authController = require("../controllers/auth.contoller.js")

const authRouter = express.Router()

/**
 *  POST /api/auth/register
*/
authRouter.post("/register",authController.registerController)

/**
 * POST /api/auth/login
*/
authRouter.post("/login", authController.loginController)




module.exports = authRouter