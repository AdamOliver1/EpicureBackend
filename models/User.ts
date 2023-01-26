import { ROLE } from "./Role";
import IModel from "./IModel";

export default interface IUser extends IModel {
  password: string;
  role: ROLE;
  generateAuthToken(): string;
}
