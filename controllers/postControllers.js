const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAllUser_id();

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};