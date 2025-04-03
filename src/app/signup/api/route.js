import connectDB from "@/lib/connectDb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Create User
export const POST = async (req) => {
    try {
        await connectDB();
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 14);
        const newUser = await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User created successfully" }, { status: 201 }, newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Get All Users
export const GET = async () => {
    try {
        await connectDB();
        const users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Delete User
export const DELETE = async (req) => {
    try {
        await connectDB();
        const id = req.nextUrl.searchParams.get("id"); // Extract ID from query params

        if (!id) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

        const user = await User.findByIdAndDelete(id);
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Update User (Full Update)
export const PUT = async (req) => {
    try {
        await connectDB();
        const id = req.nextUrl.searchParams.get("id");
        const { name, email, password } = await req.json();

        if (!id) return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        if (!name || !email) return NextResponse.json({ error: "Name and Email are required" }, { status: 400 });

        let updateData = { name, email };
        if (password) {
            updateData.password = await bcrypt.hash(password, 14);
        }

        const user = await User.findByIdAndUpdate(id, updateData, { new: true });

        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

// Update User (Partial Update)
export const PATCH = async (req) => {
    try {
        await connectDB();
        const id = req.nextUrl.searchParams.get("id");
        const body = await req.json();

        if (!id) return NextResponse.json({ error: "User ID is required" }, { status: 400 });

        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });

        if (!updatedUser) return NextResponse.json({ error: "User not found" }, { status: 404 });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
