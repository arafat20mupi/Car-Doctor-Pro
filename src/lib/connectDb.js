import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_DATABASE_URL;

if (!MONGODB_URI) {
    throw new Error('Please define the DATABASE_URL environment variable');
}

let cached = global.mongoose || { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    console.log('MongoDB connected successfully');
    return cached.conn;
};

global.mongoose = cached;
export default connectDB;