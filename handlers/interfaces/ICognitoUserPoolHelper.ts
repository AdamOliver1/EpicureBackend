import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { ICognitoUser } from '../../models/User';
import { IUserToken } from '../cognitoUserPoolHandler';
export interface ICognitoUserPoolHelper {
    userPool: CognitoUserPool;
    signUp(user:ICognitoUser): Promise<string>;
    confirmSignUp(params: { username: string; code: string }): Promise<string>;
    signIn(params: { username: string; password: string }): Promise<IUserToken | { userConfirmationNecessary: boolean }>;
  }