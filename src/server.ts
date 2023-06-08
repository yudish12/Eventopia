import express, { Express } from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import AppError from "./utils/AppError";

dotenv.config();

const app: Express = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//connect DB
const dbString: string = process.env.URI!;

mongoose
  .connect(dbString)
  .then((con: typeof mongoose) => {
    // console.log(con.connections);
    console.log("DB connection completed");
  })
  .catch((e: Error) => console.log(e));

app.use("/api/auth", authRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Cannot find route ${req.originalUrl} on the server`, 404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Error handling middleware
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const port: number = parseInt(process.env.PORT || "5000", 10);

app.listen(port, () => {
  console.log("server started");
});
