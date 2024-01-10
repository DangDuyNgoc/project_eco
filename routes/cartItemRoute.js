import express from "express";
import { isAdmin, requiredSignIn } from './../../React_app/middlewares/authMiddleware.js';
import { removeCartItemController, updateCartItemController } from './../controllers/cartItemController.js';

const router = express.Router();

router.put("/:id", requiredSignIn, updateCartItemController);
router.delete("/:id", requiredSignIn, removeCartItemController);

export default router;