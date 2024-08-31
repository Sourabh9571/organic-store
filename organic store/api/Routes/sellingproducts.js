import express from 'express';
import { addinsellingproducts, getnonsellingproducts, removefromsellingproducts } from '../Controller/sellingproduct.js';

const router = express.Router();

router.get('/',getnonsellingproducts);
router.post('/',addinsellingproducts);
router.delete('/:productid',removefromsellingproducts);

export default router;