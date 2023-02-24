import express from 'express'
import ProductsController from '../controllers/productsController.js'

const router = express.Router()

router.get('/', ProductsController.getProducts)
router.post('/', ProductsController.createProduct)
router.get('/:id', ProductsController.getProduct)
router.put('/:id', ProductsController.editProduct)
router.delete('/:id', ProductsController.deleteProduct)

export default router