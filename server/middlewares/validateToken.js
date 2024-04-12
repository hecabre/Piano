import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authRequired = (req, res, next) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.TOKEN, (error, user) => {
    if (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid token" });
      }
      if (error.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token expired" });
      }
      return res.status(403).json({ message: "Error verifying token" });
    }
    
    req.user = user
    next();
  });
};