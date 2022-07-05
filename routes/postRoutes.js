const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/users_normal")
  .get(postControllers.getAllPosts)
//   .post(postControllers.createNewPost);

//router.route("/:id").get(postControllers.getPostById);

module.exports = router;