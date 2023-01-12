import{ Request, Response, Router } from "express";

export const handleErrors =(req: Request, res: Response) => {
    throw new Error('This is an error');
  
    res.json({ status: 'ok' });
  }


process.on('uncaughtException', (ex) => {
   console.log("uncaughtException");
   
})

process.on('unhandledRejection', (ex) => {
   console.log("unhandledRejection");
   
})