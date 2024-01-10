import cartModel from "../model/cartModel.js";
import CartItem from "../model/cartItem.js";
import productModel from "../model/productModel.js";

export const createCart = async (user) => {
    try {
        const cart = new cartModel({user});
        const createdCart = await cart.save();
        return createdCart;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

export const findUserCart = async (userId) => {
    try {
        let cart = await cartModel.findOne({ user: userId });

        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for(let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }

        cart.totalItem = totalItem;
        cart.totalPrice = totalPrice;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const addCartItem = async (userID, req) => {
    try {
        const cart = await cartModel.findOne({ user: userID });
        const product = await productModel.findById(req.productId);
        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });

        if(!isPresent) {
            const cartItem = new CartIem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice
            });

            const createdCartItem = await cartItem.save();

            cart.cartItem.push(createdCartItem);
            await cart.save();
            return "Item added to cart";
        }
    } catch (error) {
        throw new Error(error.message);
    }
};