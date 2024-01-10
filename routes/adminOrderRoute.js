import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import { 
    cancelledOrdersController,
    confirmOrdersController,
    deleteOrdersController,
    deliveryOrdersController,
    getAllOrdersController,
    shippingOrdersController,
} from './../controllers/adminOrderController.js';

const router = express.Router();

router.get("/", requiredSignIn, isAdmin, getAllOrdersController);
router.put("/:orderId/confirmed", requiredSignIn, isAdmin, confirmOrdersController);
router.put("/:orderId/shipping", requiredSignIn, isAdmin, shippingOrdersController);
router.put("/:orderId/delivery", requiredSignIn, isAdmin, deliveryOrdersController);
router.put("/:orderId/cancelled", requiredSignIn, isAdmin, cancelledOrdersController);
router.put("/:orderId/delete", requiredSignIn, isAdmin, deleteOrdersController);

export default router;