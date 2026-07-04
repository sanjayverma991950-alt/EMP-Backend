import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sanjayverma991950_db_user:san%4012345@cluster0.igqvdt5.mongodb.net/ems?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default connectDB;