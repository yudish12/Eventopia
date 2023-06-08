import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (err.code === 11000) {
    const str = JSON.stringify(err.keyValue);
    return res.status(err.statusCode).json({
      status: err.status,
      message: `Duplicated key value pair found ${str}`,
      obj: err.keyValue,
    });
  }

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    xyz: "vjh",
  });
};

export default errorHandler;
