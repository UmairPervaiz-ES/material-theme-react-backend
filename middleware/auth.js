import { Jwt } from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
    const {token} = req.query;
}