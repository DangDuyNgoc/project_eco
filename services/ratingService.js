import ratingModel from "../model/ratingModel.js";
import { findProductById } from "./productService.js";

export const createRating = async (req, user) => {
    const product = await findProductById(req.productId);

    const rating = new ratingModel({
        product: product._id,
        user: user._id,
        rating: req.rating,
        createdAt: new Date()
    });

    return await rating.save();
};

export const getAllRatings = async (productId) => {
    return await ratingModel.find({ product: productId });
};