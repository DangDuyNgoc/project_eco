import express from "express";
import { getUserProfile } from './../controllers/userController.js';
import { requiredSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/profile', requiredSignIn, getUserProfile);

export default router;