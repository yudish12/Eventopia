import express, { Express } from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import mongoose from "mongoose";

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

const port: number = parseInt(process.env.PORT || "5000", 10);

app.listen(port, () => {
  console.log("server started");
});
