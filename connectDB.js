import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/urlShortner";

const connectDB = async () => {
    try {
        return mongoose.connect(MONGO_URI);
    } catch (error) {
        console.log(error);    
    }
};

export default connectDB;