import { Jwt } from "jsonwebtoken";
import user from "../database/schema/user";
import {JWT_SECRET} from process.env

export const generateAccessToken = async (user) => {
    const token = Jwt.sign(
        {
            userId: user._id,
            userEmail: user.email
        },
        {
            // process.env
        }
        );
}