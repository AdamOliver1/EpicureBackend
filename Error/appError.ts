import { HttpCode } from "./httpCode";

export interface AppErrorArgs {
  httpCode: HttpCode;
  description: string;
  isOperational?: boolean;
  errors?:{}
  //TODO add method name
}

export class AppError extends Error {
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean = true;
  public readonly args: AppErrorArgs;

  constructor(args: AppErrorArgs) {
    super(args.description);
this.args = args;
    // Object.setPrototypeOf(this, new.target.prototype);
    // this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

