import connectDB from "@/lib/connectDb";
import booking from "@/models/booking";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await connectDB();
    
    try {
        const { customerName, email, img, date, service, service_id, price } = await req.json();

        // Validation
        if (!customerName || !email || !img || !date || !service || !service_id || !price) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }

        // Save to DB
        const newBooking = await booking.create({
            customerName,
            email,
            img,
            date,
            service,
            service_id,
            price,
        });

        return NextResponse.json(
            { success: true, message: "Service Booking successfully", data: newBooking },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating booking:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
};
