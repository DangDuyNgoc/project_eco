import { 
    addCartItem,
    findUserCart, 
} from "../services/cartService.js";

export const findUserCartController = async (req, res) => {
    const user = req.user;
    try {
        const cart = await findUserCart(user._id);
        return res.status(200).send({
            success: true, 
            message: "Find User Cart Successfully",
            cart
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Find User Cart'
        });
    }
};

export const addItemToCartController = async (req, res) => {
    const user = req.user;
    try {
        const cart = await addCartItem(user._id);
        return res.status(200).send({
            success: true, 
            message: "Add Item to Cart Successfully",
            cart
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Add Item to Cart'
        });
    }
};