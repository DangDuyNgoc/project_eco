import express from "express";
import { requiredSignIn } from "../middlewares/authMiddleware.js";
import { addItemToCartController, findUserCartController } from './../controllers/cartController.js';

const router = express.Router();

router.get("/", requiredSignIn, findUserCartController);
router.put("/add-item", requiredSignIn, addItemToCartController);

export default router;