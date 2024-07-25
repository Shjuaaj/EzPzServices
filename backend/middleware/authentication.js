import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const authenticationMiddleware = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Unauthorized Login" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: "Invalid Token" });
    }
}

export default authenticationMiddleware;