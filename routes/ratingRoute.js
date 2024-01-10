import express from "express";
import { requiredSignIn } from "../middlewares/authMiddleware.js";
import { createRatingController, getAllRatingController } from './../controllers/ratingController.js';

const router = express.Router();

router.post("/create", requiredSignIn, createRatingController);
router.put("/product/:productId", requiredSignIn, getAllRatingController);

export default router;