import express from "express";
import { requiredSignIn } from "../middlewares/authMiddleware.js";
import { createReviewController, getAllReviewController } from './../controllers/reviewController.js';

const router = express.Router();

router.post("/create", requiredSignIn, createReviewController);
router.get("/product/:productId", requiredSignIn, getAllReviewController);

export default router;