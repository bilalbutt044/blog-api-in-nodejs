import express from "express";
import Comment from "../model/comment.js";
import { commentValidation } from "../validation";

const route = express();

route.get("/", async (req, res) => {
  try {
    const comment = Comment.find();
    res.send(comment);
  } catch (error) {
    res.status(400).send({ error });
  }
});

route.post("/", async (req, res) => {
  const { error } = commentValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const comment = new Comment({ ...req.body });
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.put("/:id", async (req, res) => {
  const { error } = commentValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const _id = req.params.id;
  try {
    const comment = await Comment.findByIdAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );

    if (!comment) return res.status(400).send("no comment found");

    res.send(comment);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const comment = await Comment.findByIdAndDelete({ _id }, { new: true });

    if (!comment) return res.status(400).send("no comment found");

    res.send(comment);
  } catch (error) {
    res.status(400).send({ error });
  }
});
