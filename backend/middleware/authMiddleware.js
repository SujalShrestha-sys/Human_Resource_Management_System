import jwt from "jsonwebtoken";
import Employee from "../models/employee.js";
import rateLimit from "express-rate-limit"

export const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log("token", token)

        if (!token) {
            return res.status(401).json({
                status: false,
                message: "unauthorized"
            })
        }

        const decoded = jwt.verify(token, "a-string-secret-at-least-256-bits-long");
        req.employee = await Employee.findById(decoded.id).select("-password");

        next();
    } catch (error) {
        console.log(error.message)
        res.status(401).json({
            status: false,
            message: "unauthorized"
        })
    }
}


export const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req?.employee?.role;

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. only [${allowedRoles.join(", ")}] allowed.`,
            })
        }

        next();
    }
}


export const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 3,
    skipSuccessfulRequests : true,
    message: {
        status: 429,
        message: "Too many login attempts. Please try again after 10 mins.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});
