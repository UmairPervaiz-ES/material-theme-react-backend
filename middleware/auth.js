import Jwt  from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
    const {token} = req.query;
    console.log(token);

    if(!token){
        res.status(401).json({
            error: 'error',
            msg: "Unauthorized"
        })
    }
    next();
}