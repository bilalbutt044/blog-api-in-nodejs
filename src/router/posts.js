import express from "express";
import Post from "../model/posts.js";
import { postValidation } from "../validation.js";

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const post = await Post.find({ _id });

    if (!post.length) return res.status(400).send("post not found");

    res.send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.post("/", async (req, res) => {
  try {
    const { error } = postValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const post = new Post({ ...req.body });
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { error } = postValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const _id = req.params.id;

    const post = await Post.findByIdAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );

    if (!post) return res.status(400).send("post not found");

    res.send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const post = await Post.findByIdAndDelete({ _id }, { new: true });

    if (!post) return res.status(400).send("post not found");

    res.send(post);
  } catch (error) {
    res.status(400).send({ error });
  }
});

export default route;
