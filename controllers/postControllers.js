const Post = require("../models/Post");

exports.getAllUser_id = async (req, res, next) => {
  try {
    const [idsArray, _] = await Post.findAllUser_id();

    res.status(200).json({ count: idsArray.length, user_ids: idsArray });
  } catch (error) {
    next(error);
  }
};

exports.listConnectedClasses = async (req, res, next) => {
    try {
      let user_id = req.params.id;
  
      let [post, _] = await Post.findByClass(user_id);
  
      res.status(200).json({ conClasses: post[0] });
    } catch (error) {
      next(error);
    }
  };