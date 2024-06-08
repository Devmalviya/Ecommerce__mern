import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL,);
        console.log(`Connected to MongoDB database on host ${conn.connection.host}`.cyan);
    } catch (error) {
        console.error(`Error in MongoDB: ${error.message}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
