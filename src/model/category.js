import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    max: 75,
  },
  metaTitle: {
    type: String,
    max: 100,
  },
  slug: {
    type: String,
    max: 100,
  },
});

const Category = mongoose.model("category", categorySchema);
export default Category;
