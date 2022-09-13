import express from "express";
import Category from "../model/category.js";
import { categoryValidation } from "../validation.js";

const route = express();

route.get("/", async (req, res) => {
  try {
    const category = Category.find();
    res.send(category);
  } catch (error) {
    res.status(400).send({ error });
  }
});

route.post("/", async (req, res) => {
  const { error } = categoryValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const category = new Category({ ...req.body });
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.put("/:id", async (req, res) => {
  const { error } = categoryValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const _id = req.params.id;
  try {
    const category = await Category.findByIdAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );

    if (!category) return res.status(400).send("no category found");

    res.send(category);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const category = await Category.findByIdAndDelete({ _id }, { new: true });

    if (!category) return res.status(400).send("no category found");

    res.send(category);
  } catch (error) {
    res.status(400).send({ error });
  }
});

export default route;
