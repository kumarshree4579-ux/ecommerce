import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// Get all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res
        .status(404)
        .json({ message: "user not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Users fetching successfully", success: true, users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internl server error ", success: false, error });
  }
};

// add user
export const addUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res
        .status(400)
        .json({ message: "all fileds are requried !", success: false });
    }
    const isExist = await User.findOne({ email });
    if (isExist) {
      return res
        .status(400)
        .json({ message: "user already exist", success: false });
    }

    const slte= await bcrypt.genSalt(12)
    const hashpassword= await bcrypt.hash(password, slte)

    const newUser = await User.create({
      name,
      email,
      password:hashpassword,
      role,
      address,
      phone,
    });
    if (!newUser) {
      return res
        .status(400)
        .json({ message: "User not created", success: false });
    }
    return res
      .status(201)
      .json({ message: "user created successfull ", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internl server error ", success: false, error });
  }
};
