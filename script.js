import mongoose from "mongoose";
import myModel from "./User.js";

mongoose.connect("mongodb://localhost/testdb");

// const user = new myModel({ name: "Kyle", age: 26 });
// user.save().then(() => console.log("user saved"));

run();
async function run() {
  const user = await myModel.create({ name: "Kyle", age: 26 });
  //   const user = new myModel({ name: "Kyle", age: 26 });
  //   await user.save();
  console.log(user);
}
