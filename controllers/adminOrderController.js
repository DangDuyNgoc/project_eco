import { 
    cancelOrder,
    confirmOrder,
    deleteOrder,
    deliveryOrder,
    getAllOrders,
    shipOrder 
} from '../services/orderService.js';

export const getAllOrdersController = async (req, res) => {
    try {
        const orders = await getAllOrders();
        return res.status(200).send({
            success: true,
            message: "Get All Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Orders",
        });
    }
};

export const confirmOrdersController = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orders = await confirmOrder(orderId);
        return res.status(200).send({
            success: true,
            message: "Confirm Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Confirm Orders",
        });
    }
};

export const shippingOrdersController = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orders = await shipOrder(orderId);
        return res.status(200).send({
            success: true,
            message: "Shipping Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Shipping Orders",
        });
    }
};

export const deliveryOrdersController = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orders = await deliveryOrder(orderId);
        return res.status(200).send({
            success: true,
            message: "Get All Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Get All Orders",
        });
    }
};

export const cancelledOrdersController = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orders = await cancelOrder(orderId);
        return res.status(200).send({
            success: true,
            message: "Cancelled Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Cancelled Orders",
        });
    }
};

export const deleteOrdersController = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const orders = await deleteOrder(orderId);
        return res.status(200).send({
            success: true,
            message: "Deleted Orders SuccessFully",
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Deleted Orders",
        });
    }
};