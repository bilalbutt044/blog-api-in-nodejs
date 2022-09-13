import express from "express";
import User from "../model/user.js";
import { userValidation } from "../validation.js";

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});

route.post("/", async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = new User({ ...req.body });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { error } = userValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const _id = req.params.id;

    const user = await User.findByIdAndUpdate(
      { _id },
      { ...req.body },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});
route.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete({ _id }, { new: true });
    res.send(user);
  } catch (error) {
    res.status(400).send({ error });
  }
});

export default route;
