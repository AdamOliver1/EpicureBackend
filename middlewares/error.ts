import{ NextFunction, Request, Response, Router } from "express";

export const errorHandler = (
   error: Error,
   req: Request,
   res: Response,
   next: NextFunction
 ) => {
    console.log("erorrrrrrrrrrrrr");
   console.error(error);
   
   res.status(500).json({ message: error.message });
 };

process.on('uncaughtException', (ex) => {
   console.log("uncaughtException");
   
})

process.on('unhandledRejection', (ex) => {
   console.log("unhandledRejection");
   
})