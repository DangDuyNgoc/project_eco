import { updateCartItem, removeCartItem } from './../services/cartItemService.js';

export const updateCartItemController = async (req, res) => {
    const user = req.user;
    try {
        const updateCart = await updateCartItem(user._id, req.params.id, req.body);

        return res.status(200).send({
            success: true,
            message: "Updated Cart Successfully",
            updateCart
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Updated Cart",
        });
    }
};

export const removeCartItemController = async (req, res) => {
    const user = req.user;
    try {
        await removeCartItem(user._id, req.params.id, req.body);

        return res.status(200).send({
            success: true,
            message: "Remove Cart Item Successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Remove Cart Item",
        });
    }
};