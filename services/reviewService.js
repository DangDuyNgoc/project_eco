import reviewModel from "../model/reviewModel.js";
import { findProductById } from "./productService.js";

export const createReview = async (reqData, user) => {
    const product = await findProductById(reqData.productId);

    const review = new reviewModel({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date()
    });

    await product.save();
    return await review.save();
};

export const getAllReview = async (productId) => {
    const product = await findProductById(reqData.productId);

    return await reviewModel.find({ product: productId }).populate("user");
};