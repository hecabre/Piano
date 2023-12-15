import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.TOKEN);

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", authRouter);

export default app;
