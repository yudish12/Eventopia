import { Request, Response, NextFunction } from "express";

const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch((err) => {
      return next(err);
    });
  };
};

export default catchAsync;
