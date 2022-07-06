const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/users_normal")
  .get(postControllers.getAllUser_id);

router
  .route("/connected_classes/:id")
  .get(postControllers.listConnectedClasses);





module.exports = router;