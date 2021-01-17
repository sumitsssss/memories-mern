const express = require("express").Router;
const router = express();
const {getPosts, createPost} = require("../controllers/posts");

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
