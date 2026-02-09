import express, { Router } from 'express'
import { addProduct, getAllActiveProduct, getAllProduct, getProductById } from '../controllers/productController.js'
import upload from '../middleware/multer.js'

const router = express.Router()

router.get("/all", getAllProduct)
router.get("/all/active", getAllActiveProduct)
router.post("/add", upload.single("image"), addProduct)
router.get("/:id",getProductById)

export default router;