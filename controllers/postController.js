const { Post, User, Comment } = require('../models');

const postController = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            include: { model: User, attributes: ['username'] },
          },
        ],
      });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a single post by ID
  getPostById: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            include: { model: User, attributes: ['username'] },
          },
        ],
      });
      if (!post) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new post
  createPost: async (req, res) => {
    try {
      const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
      res.status(201).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update a post
  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
       
