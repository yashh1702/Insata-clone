const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller.js")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware.js")
/**
 * POST /api/posts/ [protected]
 */
postRouter.post("/", upload.single("image"), identifyUser, postController.createPostController)

/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/", identifyUser, postController.getPostController)

/**
 * GET /api/posts/details/:postid
 * -return a detail about specific post with the id also check whether the post
 * belongs to the user that the request come from
 */
postRouter.get("/details/:postId", identifyUser, postController.getPostDetails)

/**
 * POST /api/posts/like/:postid
 * -likes a post with the id provided in the postid
 */
postRouter.post("/like/:postId", identifyUser, postController.likePostController)

module.exports = postRouter

