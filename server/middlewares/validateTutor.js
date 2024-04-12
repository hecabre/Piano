import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { findTutor } from "../models/tutor.model.js";

dotenv.config();

export const authTutor = async (req, res, next) => {
  const token = req.cookies.token;

  jwt.verify(token, process.env.TOKEN, async (error, tutor) => {
    if (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid token" });
      }
      if (error.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Token expired" });
      }
      return res.status(403).json({ message: "Error verifying token" });
    }
    try {
      const user = await findTutor(tutor.email);
      if (user) {
        req.user = tutor;
        next();
      } else {
        return res.status(403).json({
          message: "No eres un tutor",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "Error al buscar al tutor",
        error: e.message,
      });
    }
  });
};
