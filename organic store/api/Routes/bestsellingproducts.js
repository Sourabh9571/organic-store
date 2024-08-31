import express from 'express';
import { addinbestsellingproducts, getbestsellingproducts, notbestsellingproducts, removefrombestsellingproducts } from '../Controller/bestsellingproducts.js';

const router = express.Router();

router.get('/',getbestsellingproducts);
router.post('/',addinbestsellingproducts);
router.delete('/:id',removefrombestsellingproducts);
router.get('/notbestsellingproducts',notbestsellingproducts);

export default router;