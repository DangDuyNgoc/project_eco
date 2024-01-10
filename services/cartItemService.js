import { findUserById } from "../middlewares/authMiddleware.js";
import CartItem from "../model/cartItem.js";

export const updateCartItem = async (userId, cartItemId, cartItemData) => {
    try {

        if(!item) {
            throw new Error("Cart Item not found: ", cartItemId);
        }

        const user = await findUserById(item.userID);

        if(!user) {
            throw new Error("user not found: ", userId);
        }

        if(user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.product.price * item.quantity;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updateCartItem = await item.save();
            return updateCartItem;
        } else {
            throw new Error("Error in Updated Cart")
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const removeCartItem = async (userId, cartItemId) => {
    try {
        const item = await findCartItemById(cartItemId);
        const user = await findUserById(userId);
        
        if(user._id.toString() === item.userId.toString()) {
            await CartItem.findByIdAndDelete(cartItemId);
        }
        throw new Error("Error in Remove Cart Item");
    } catch (error) {
        throw new Error(error.message);
    }
};

export const findCartItemById = async (cartItemId) => {
    const item = await findCartItemById(cartItemId);
    if(item) {
        return item;
    } else {
        throw new Error("CartItem not found: ", cartItemId);
    }
}