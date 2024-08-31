import express from 'express';
import { addProduct , getProducts, updateproduct } from '../Controller/products.js';

const router = express.Router();

router.get('/',getProducts );
router.post('/',addProduct );
router.put('/',updateproduct);

export default router;