import { createRating, getAllRatings } from './../services/ratingService.js';

export const createRatingController = async (req, res) => {
    const user = req.user;
    try {
        const review = await createRating(req.body, user);

        return res.status(200).send({
            success: true,
            message: "Created Rating Successfully",
            review
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Created Rating",
        })
    }
};

export const getAllRatingController = async (req, res) => {
    const productId = req.params.id;
    try {
        const getReviews = await getAllRatings(productId);

        return res.status(200).send({
            success: true,
            message: "Get All Rating Successfully",
            getReviews
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Get All Rating",
        })
    }
};