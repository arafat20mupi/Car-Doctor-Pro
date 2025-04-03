import connectDB from "@/lib/connectDb";
import services from "@/models/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB(); // Ensure the database connection is awaited
        const servicesData = await services.find({});
        return NextResponse.json({ success: true, data: servicesData });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "An error occurred", error: error.message }, { status: 500 });
    }
};