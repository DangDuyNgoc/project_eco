import express from "express";
import { requiredSignIn } from "../middlewares/authMiddleware.js";
import { createOrderController, findOrderByIdController, orderHistoryController } from './../controllers/OrderController.js';

const router = express.Router();

router.post("/", requiredSignIn, createOrderController);
router.get("/order-history", requiredSignIn, orderHistoryController);
router.get("/:id", requiredSignIn, findOrderByIdController);

export default router;