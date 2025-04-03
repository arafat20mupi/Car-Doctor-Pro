import connectDB from "@/lib/connectDb";
import { service } from "@/lib/service";
import services from "@/models/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB(); // Ensure the database connection is awaited
        // delete all data
        await services.deleteMany({});
        // insert all services
        const res = await services.insertMany(service);
        return NextResponse.json({ success: true, message: "Services inserted successfully", data: res });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "An error occurred", error: error.message }, { status: 500 });
    }
};