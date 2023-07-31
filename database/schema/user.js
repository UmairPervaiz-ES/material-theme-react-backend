import mongoose from "mongoose";
const Schema = mongoose.Schema;

let user = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email ID.'],
    unique: true,
    index: true
  },
  password: {
    type: String,
  }
});

export default user;