import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    phone: {
        type: String,
        required: true
    }
});

export default mongoose.model("address", addressSchema);