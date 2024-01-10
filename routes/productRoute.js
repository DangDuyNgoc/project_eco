import express from "express";
import { findProductByIdController, getAllProductController } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductController);
router.get("/id/:id", findProductByIdController);

export default router;