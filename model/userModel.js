import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    role: {
        type: Number,
        default: 0, // 1 for admin and 0 for normal users
    },
    phone: {
        type: String,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "address"
    }],
    paymentInformation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "payment_information"
        }
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratings"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "reviews"
        }
    ],
}, {timestamps: true});

export default mongoose.model('users', userSchema);