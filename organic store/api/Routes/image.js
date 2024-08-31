import express from 'express';
import { deleteimage, uploadimage } from '../Controller/image.js';

const router = express.Router();

router.post('/',uploadimage);
router.delete('/:filename', deleteimage);

export default router;