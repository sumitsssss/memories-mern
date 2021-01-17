const PostMessage = require("../models/postModels");

const getPosts = async (req, res) => {
  try {
    const postsMessages = await PostMessage.find();

    // console.log(postsMessages);
    res.status(200).json(postsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.error(error);
  }
};

const createPost = (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getPosts, createPost };
