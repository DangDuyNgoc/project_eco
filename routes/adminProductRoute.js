import express from "express";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import { 
    createMultipleProductController,
    createProductController,
    deletedProductController,
    updateProductController 
} from './../controllers/productController.js';

const router = express.Router();

router.post("/", requiredSignIn, createProductController);
router.post("/create-mul-product", requiredSignIn, isAdmin, createMultipleProductController);
router.delete("/:id", requiredSignIn, isAdmin, deletedProductController);
router.put("/:id", requiredSignIn, isAdmin, updateProductController); 

export default router;