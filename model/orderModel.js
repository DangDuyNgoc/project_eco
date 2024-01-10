import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    orderItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "orderItems"
        }
    ],
    orderDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address"
    },
    paymentDetails: {
        paymentMethod: {
            type: String
        },
        transactionId: {
            type: String
        },
        paymentId: {
            type: String
        },
        paymentStatus: {
            type: String,
            default: "PENDING"
        }
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "PENDING"
    },
    totalItem: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("orders", orderSchema);