import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    service_id: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, { timestamps: true });

const booking = mongoose.models.booking || mongoose.model("booking", bookingSchema);
export default booking;
