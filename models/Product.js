import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: [String]
  }
}, {
  timestamps: true
})

export default mongoose.model('Product', ProductSchema)