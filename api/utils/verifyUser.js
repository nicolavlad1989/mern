import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies_token;

    if  (!token) return res.next(errorHandler(401, "You are not authenticated"))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.next(errorHandler(403, "Token is not valid"))

        req.user = user;
        next();
    })
}