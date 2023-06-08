import { Request, Response } from "express";

export const helloAuth = (req: Request, res: Response) => {
  res.status(200).json({
    status: "Success",
    message: "Hello from auth routes",
  });
};
