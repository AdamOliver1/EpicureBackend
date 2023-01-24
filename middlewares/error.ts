import{ NextFunction, Request, Response } from "express";

export const errorHandler = (
   error: Error,
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
    console.log("error middleware: ");
   console.error(error);
   
   res.status(500).json({ message: error.message });
 };

process.on('uncaughtException', (ex) => {
   console.log("uncaughtException");
   
})

process.on('unhandledRejection', (ex) => {
  console.log(ex);
  
   console.log("unhandledRejection");
   
})