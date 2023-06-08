import { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/globalErrorHandler";

export const helloAuth = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    //checking app error class and global error handler

    // if (Object.keys(req.params).length === 0) {
    //   return next(new AppError(`no params found`, 404));
    // }

    res.status(200).json({
      status: "Success",
      message: "Hello from auth routes",
    });
  }
);
