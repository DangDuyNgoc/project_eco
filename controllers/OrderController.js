import { createOrder, findOrderById, userOrderHistory } from './../services/orderService.js';

export const createOrderController = async (req, res) => {
    const user = req.user;
    try {
        let createOrder = await createOrder(user, req.body);
        return res.status(200).send({
            success: true,
            message: "Created Order SuccessFully",
            createOrder
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Created Order",
        });
    }
};

export const findOrderByIdController = async (req, res) => {
    try {
        let findOrderId = await findOrderById(req.params.id);
        return res.status(200).send({
            success: true,
            message: "Find Order By ID SuccessFully",
            findOrderId
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Find Order By ID",
        });
    }
};

export const orderHistoryController = async (req, res) => {
    const user = req.user;
    try {
        let historyOrder = await userOrderHistory(user._id);
        return res.status(200).send({
            success: true,
            message: "View Order History SuccessFully",
            historyOrder
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in View Order History",
        });
    }
};