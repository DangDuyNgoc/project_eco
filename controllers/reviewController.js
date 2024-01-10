import { createReview, getAllReview } from './../services/reviewService.js';

export const createReviewController = async (req, res) => {
    const user = req.user;
    try {
        const review = await createReview(req.body, user);

        return res.status(200).send({
            success: true,
            message: "Created Review Successfully",
            review
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Created Review",
        })
    }
};

export const getAllReviewController = async (req, res) => {
    const productId = req.params.id;
    try {
        const getReviews = await getAllReview(productId);

        return res.status(200).send({
            success: true,
            message: "Get All Review Successfully",
            getReviews
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Get All Review",
        })
    }
}