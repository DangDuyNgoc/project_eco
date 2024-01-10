import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number
    },
    discountPercent: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    },
    brand: {
        type: String
    },
    color: {
        type: String
    },
    size: [
        {
            name: {type: String},
            quantity: {type: String}
        }
    ],
    imageUrl: {
        type: String
    },
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
    numRating: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("products", productSchema);