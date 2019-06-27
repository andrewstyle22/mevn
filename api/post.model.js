const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define collection and schema for Post
const Post = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
}, {
  collection: 'posts',
});

module.exports = mongoose.model('Post', Post);
