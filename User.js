import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
});

const myModel = mongoose.model("User", userSchema);

export default myModel;
