import mongoose from "mongoose";

const servicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    facility: [
        {
            name: {
                type: String,
                required: true
            },
            details: {
                type: String,
                required: true
            }
        }
    ]

}, { timestamps: true });

const services = mongoose.models.services || mongoose.model("services", servicesSchema);
export default services;