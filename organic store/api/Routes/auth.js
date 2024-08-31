import express from "express";

import { logincontroller , registercontroller , logoutcontroller } from "../Controller/auth.js";




const router = express.Router();

router.post('/login',logincontroller);
router.post('/register',registercontroller);
router.post('/logout',logoutcontroller);

export default router;