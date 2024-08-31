import express from 'express';
import { addtrendingproducts, gettrendingproducts , removetrendingproducts , getnontrendingproducts } from '../Controller/trendingproducts.js';

const router = express.Router();

router.get('/',gettrendingproducts);
router.put('/',addtrendingproducts);
router.delete('/:id',removetrendingproducts);
router.get('/shownontrendingproducts',getnontrendingproducts);

export default router;