const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const cors = require('cors');

const app = express();

// Add proper body parsing middleware - THIS MUST COME BEFORE ROUTES
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Connect to Redis
const REDIS_URI = process.env.REDIS_URI || 'redis://localhost:6379';
const redisClient = redis.createClient({ url: REDIS_URI });
redisClient.connect().then(() => console.log('Connected to Redis'));
redisClient.on('error', (err) => console.error('Redis connection error:', err));

// Post model
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'posts-service' });
});

// Get all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new post
app.post('/posts', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Debug logging
    const { title, content, author } = req.body;
    
    const post = new Post({
      title,
      content,
      author
    });
    
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Posts service running on port ${PORT}`);
});

module.exports = app;
