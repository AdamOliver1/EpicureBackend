import { ROLE } from "./../models/Role";
import { STATUS } from "./../models/status";
import { AppError } from "./../Error/appError";
// import 'cross-fetch/polyfill';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
import * as dotenv from "dotenv";
import { ICognitoUserPoolHelper } from "./interfaces/ICognitoUserPoolHelper";
import { injectable } from "inversify";
import { HttpCode } from "../Error/httpCode";
import { ICognitoUser } from "../models/User";
dotenv.config();

export interface IUserToken {
  accessToken: string;
  refreshToken: string;
  user: { username: string; email: string; role: ROLE };
}

@injectable()
export class CognitoUserPoolHelper implements ICognitoUserPoolHelper {
  public userPool: CognitoUserPool;

  constructor() {
    this.userPool = new CognitoUserPool({
      UserPoolId: process.env.USER_POOL_ID || "",
      ClientId: process.env.CLIENT_ID || "",
    });
  }

  public signUp(user: ICognitoUser): Promise<string> {
    return new Promise((resolve, reject) => {
      const attributeList: CognitoUserAttribute[] = [
        new CognitoUserAttribute({
          Name: "email",
          Value: user.email,
        }),
        new CognitoUserAttribute({
          Name: "custom:role",
          Value: user.role?.toString() ?? ROLE.UPDATER.toString(),
        }),
        new CognitoUserAttribute({
          Name: "custom:status",
          Value: user.status?.toString() ?? STATUS.EXISTS.toString(),
        }),
      ];
      //TODO ADD VALIDATION

      this.userPool.signUp(
        user.username,
        user.password,
        attributeList,
        [],
        (err, result) => {
          if (err) {
            return reject(
              new AppError({
                description: err.message,
                httpCode: HttpCode.UNAUTHORIZED_401, //
              })
            );
          }
          resolve(result?.user.getUsername() || "");
        }
      );
    });
  }

  public confirmSignUp({
    username,
    code,
  }: {
    username: string;
    code: string;
  }): Promise<string> {
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser({
        Username: username,
        Pool: this.userPool,
      });
      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          return reject(
            new AppError({
              description: err.message,
              httpCode: HttpCode.UNAUTHORIZED_401,
            })
          );
        }

        resolve(result);
      });
    });
  }

  public signIn({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<IUserToken | { userConfirmationNecessary: boolean }> {
    return new Promise((resolve, reject) => {
      const cognitoUser = new CognitoUser({
        Username: username,
        Pool: this.userPool,
      });

      const authenticationDetails = new AuthenticationDetails({
        Username: username,
        Password: password,
      });
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session, userConfirmationNecessary) => {
          if (userConfirmationNecessary)
            return resolve({ userConfirmationNecessary });
          const payload = session.getIdToken().payload;
          const email = payload.email;
          const role = payload["custom:role"];
          const username = payload["cognito:username"];

          resolve({
            accessToken: session.getAccessToken().getJwtToken(),
            refreshToken: session.getRefreshToken().getToken(),
            user: { username, email, role },
          });
        },
        onFailure: (err: any) => {
          reject(
            new AppError({
              description: err.message,
              httpCode: HttpCode.UNAUTHORIZED_401,
            })
          );
        },
      });
    });
  }
}


