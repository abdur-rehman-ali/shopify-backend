import Product from "../models/product.js"

import { isValid, asyncWrapper } from "../utils/helpers.js"

class ProductsController {
  static getProducts = asyncWrapper(async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ count: products.length, products })
  })

  static getProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params

    if (!isValid(id)) {
      return res.status(404).json({ status: 'failed', message: 'Id is not valid' })
    }

    const product = await Product.findById(id)
    if (product) {
      res.status(200).json({ product })
    } else {
      res.status(404).json({ status: 'failed', message: 'Product not found' })
    }
  })

  static createProduct = asyncWrapper(async (req, res) => {
    const { title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    } = req.body

    const product = await Product.create({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    })
    res.status(201).json({ status: 'success', product })
  })

  static editProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params
    const { title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    } = req.body

    if (!isValid(id)) {
      return res.status(404).json({ status: 'failed', message: 'Id is not valid' })
    }

    const product = await Product.findByIdAndUpdate(id, {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images
    }, {
      runValidators: true,
      new: true
    })
    if (product) {
      res.status(201).json({ status: 'success', product })
    } else {
      res.status(404).json({ status: 'failed', message: 'Product not found' })
    }
  })

  static deleteProduct = asyncWrapper(async (req, res) => {
    const { id } = req.params

    if (!isValid(id)) {
      return res.status(404).json({ status: 'failed', message: 'Id is not valid' })
    }

    const product = await Product.findByIdAndDelete(id)
    if (product) {
      res.status(200).json({ status: 'success', message: 'Product deleted successfully!!!' })
    } else {
      res.status(404).json({ status: 'failed', message: 'Product not found' })
    }
  })
}

export default ProductsController