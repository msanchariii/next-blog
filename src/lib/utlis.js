import mongoose from "mongoose";
const connection = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log("MONGODB Connected");
    } catch (error) {
        console.log("DB Connection Error:: ", error);
    }
};
