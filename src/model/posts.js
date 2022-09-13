import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    max: 75,
    min: 5,
    required: true,
  },
  metaTitle: {
    type: String,
    max: 100,
    min: 5,
    required: true,
  },
  slug: {
    type: String,
    max: 100,
    required: true,
  },
  summary: {
    type: String,
    max: 50,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
