import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import signatureRoutes from "./routes/exercises.routes.js";
import tutorRoutes from "./routes/tutor.routes.js";
import cors from "cors";
import subjectRoutes from "./routes/subject.routes.js";
import exerciseRoutes from "./routes/exercises.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRouter);
app.use("/api/signatures", signatureRoutes);
app.use("/api/tutor", tutorRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/exercise", exerciseRoutes);

export default app;
