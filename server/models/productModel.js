import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    mrp: Number,
    description: String,
    image: {
        url: String,
        objectid: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

const productModel = mongoose.model("Product", productSchema)
export default productModel