import { AppError } from "./../Error/appError";
import {ObjectSchema} from "joi";
import { HttpCode } from "../Error/httpCode";

// export enum ValidateTypes {
//     LOGIN = "login",
//     RESTAURANT = "restaurant",
//     CHEF = "chef",
//     DISH = "dish"
// }

// export class ValidationHandler implements IValidationHandler {
//   private static schemas = new Map<ValidateTypes,ObjectSchema>();
//   static addSchema(type: ValidateTypes, schema: ObjectSchema) {
//     this.schemas.set(type,schema);
    
//   }

//   validate(type: ValidateTypes,data:any) {
//     if (!ValidationHandler.schemas.has(type)) {
//       throw new AppError({
//         isOperational: false,
//         description: `Schema ${type} not found`,
//         httpCode: HttpCode.INTERNAL_SERVER_ERROR_500,
//       });
//     }
//     return ValidationHandler.schemas.get(type)?.validate(data);
//   }
// }
