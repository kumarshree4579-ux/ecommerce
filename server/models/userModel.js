import mongoose from "mongoose";

const userSchma = new mongoose.Schema({
  name: String,
  email: { type: String, require: true, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
  phone: Number,
  address: String,
});
const userModel = mongoose.model("User",userSchma)
export default userModel;