import express from 'express';
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} from './product.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;