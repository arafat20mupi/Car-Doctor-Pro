// app/api/services/[id]/route.js
import connectDB from "@/lib/connectDb";
import services from "@/models/services";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const { id } = params;
        const service = await services.findById(id);

        if (!service) {
            return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: service });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json(
            { success: false, message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
};
