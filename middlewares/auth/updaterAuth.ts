import { Request, Response, NextFunction } from "express";
import { ROLE } from "../../models/Role";
import { AppError } from "../../Error/appError";
import { HttpCode } from "../../Error/httpCode";
import { CognitoIdentityServiceProvider } from 'aws-sdk';

//#region  mongoDB user auth
// export interface IToken extends JwtPayload {
//   _id: string;
//   role: ROLE;
// }

// export interface CustomRequest extends Request {
//   token: IToken;
// }
//#endregion
export interface IAuthenticatedRequest extends Request {
user: {role:ROLE}
}

const identityServiceProvider = new CognitoIdentityServiceProvider({
  region: process.env.REGION || 'ap-northeast-1',
});

export async function authUpdater(req: Request, res:Response, next:NextFunction) {
  const token = req.header("authorization")?.replace("Bearer ", "");

  if (!token)
    throw new AppError({
      description: "Unauthorized user",
      httpCode: HttpCode.FORBIDDEN_403,
    });

  const rawUser = await identityServiceProvider.getUser({ AccessToken: token }).promise();
  (req as IAuthenticatedRequest).user =  {role: rawUser.UserAttributes.find((attr) => attr.Name === 'custom:role')?.Value! as ROLE};
  // (req as CustomRequest).token = decoded as IToken;
  next();
}
