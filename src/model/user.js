import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fName: {
    type: String,
    min: 3,
    max: 50,
    required: true,
  },
  lName: {
    type: String,
    min: 3,
    max: 50,
    required: true,
  },
  mobile: {
    type: String,
    max: 15,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    max: 50,
    required: true,
  },
  registeredAt: {
    type: Date,
  },
  lastLogin: {
    type: Date,
  },
  intro: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
