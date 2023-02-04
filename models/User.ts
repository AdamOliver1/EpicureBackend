import { ROLE } from "./Role";
import IModel from "./IModel";
import { STATUS } from "./status";

//#region mongoDB user
export default interface IUser extends IModel {
  password: string;
  role: ROLE;
  generateAuthToken(): string;
}
//#endregion

//#region cognito user
export interface ICognitoUser {
  username: string;
  password: string;
  email: string;
  role?: ROLE;
  status?: STATUS;
}
//#endregion