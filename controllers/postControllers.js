const Post = require("../models/Post");

exports.getAllUser_id = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAllUser_id();

    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    next(error);
  }
};

exports.listConnectedClasses = async (req, res, next) => {
    try {
      let user_id = req.params.id;
  
      let [post, _] = await Post.findByClass(user_id);
  
      res.status(200).json({ post: post[0] });
    } catch (error) {
      next(error);
    }
  };