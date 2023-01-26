import { Response } from "express";
import { AppError } from "./appError";
import { HttpCode } from "./httpCode";

class ErrorHandler {
  
  handleError(error: Error | AppError, response?: Response): void {
    console.log("error", error);
    
    if (this._isTrustedError(error) && response) {
      this._handleTrustedError(error as AppError, response);
    } else {
      this._handleCriticalError(error, response);
    }
  }

  private _checkIfAppError(error: Error | AppError) {
    try {
      return error as AppError;
    } catch (err) {
      return undefined;
    }
  }

  private _isTrustedError(error: Error): boolean {
    const err = this._checkIfAppError(error)
    return !!err ? err.isOperational : false;
  }

  private _handleTrustedError(error: AppError, response: Response): void {
    console.log("_handleTrustedError");

    response.status(error.httpCode).json({ message: error.message });
  }

  private _handleCriticalError(
    error: Error | AppError,
    response?: Response
  ): void {
    console.log("_handleCriticalError");
    if (response) {
      response
        .status(HttpCode.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Internal server error" });
    }

    console.log("Application encountered a critical error. Exiting");
    // process.exit(1);
  }
}

export const errorHandler = new ErrorHandler();
