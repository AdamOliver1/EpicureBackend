import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../Error/errorHandler";

export const error = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error middleware: ");
  errorHandler.handleError(error,res);

};

process.on("uncaughtException", (ex) => {
  console.log("uncaughtException");
  errorHandler.handleError(ex)
});

process.on("unhandledRejection", (ex) => {
  errorHandler.handleError(ex as Error)
  console.log("unhandledRejection");
});
