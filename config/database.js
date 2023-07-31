import mongoose from "mongoose";
import dotENV from 'dotenv';
dotENV.config();
const {
    MONGO_URL
} = process.env;
export const connect = () => {
    // Connecting to the database
    return mongoose
        .connect(MONGO_URL)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
            process.exit(1);
        });
};