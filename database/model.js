import mongoose from "mongoose";
import userSchema from './schema/user.js';

export const userModel = mongoose.model('users', userSchema);