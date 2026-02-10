import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, mrp, description } = req.body;
    const img = req.file
    console.log("Image Data", img)
    if (!name || !price || !mrp || !description) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const product = await Product.create({
      name,
      price,
      mrp,
      description,
      image: {
        url: img.path,
        objectid: img.filename
      }
    });
    if (!product) {
      return res
        .status(400)
        .json({ message: "Product not created", success: false });
    }
    return res
      .status(201)
      .json({ message: "Product Created Successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res
        .status(400)
        .json({ message: "No Products found", success: false });
    }
    return res.status(200).json({
      message: "Product fetched successfully",
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
};

export const getAllActiveProduct = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    if (!products) {
      return res
        .status(400)
        .json({ message: "No Products found", success: false });
    }
    return res.status(200).json({
      message: "Product fetching successfully",
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products) {
      return res
        .status(400)
        .json({ message: "No Products found", success: false });
    }
    return res.status.json({
      message: "Product fetching successfully",
      success: true,
      products,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
};


export const statusChange = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id);
    const newStatus = !product.isActive;
    product.isActive = newStatus;
    await product.save();
    return res.status(200).json({
      message: `Status change ${product.isActive ? "Active" : "InActive"}`
    });

  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false, error });
  }
}