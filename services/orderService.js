import addressModel from "../model/addressModel.js";
import Order from "../model/orderModel.js";
import { findUserCart } from "./cartService.js";

export const createOrder = async (user, shippingAddress) => {
    let address;

    if (shippingAddress._id) {
        let existAddress = await addressModel.findById(shippingAddress._id);
        address = existAddress;
    } else {
        address = new addressModel(shippingAddress);
        address.user = user;
        await address.save();

        user.address.push(address);
        await user.save();
    }

    const cart = await findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new orderItems({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice
        });

        const createdOrderItem = await orderItem.save();
        orderItem.push(createdOrderItem);
    };

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount,
        totalItem: cart.totalItem,
        shippingAddress: address
    })

    const saveOrder = await createdOrder.save();

    return saveOrder;
};

export const placeOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
};

export const confirmOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = "CONFIRM";

    return await order.save();
};

export const shipOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = "SHIPPED";

    return await order.save();
};

export const deliveryOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = "DELIVERED";

    return await order.save();
};

export const cancelOrder = async (orderId) => {
    const order = await findOrderById(orderId);

    order.orderStatus = "CANCELLED";

    return await order.save();
};

export const findOrderById = async (orderId) => {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItem", populate: { path: "product" } })
        .populate("shippingAddress");

    return order;
};

export const userOrderHistory = async (userId) => {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
            .populate({ path: "orderItem", populate: { path: "product" } }).lean()

        return orders;
    } catch (error) {
        console.log(error);
    }
};

export const getAllOrders = async () => {
    return await Order.find()
        .populate({ path: "orderItem", populate: { path: "product" } }).lean()
};

export const deleteOrder = async (orderID) => {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
};