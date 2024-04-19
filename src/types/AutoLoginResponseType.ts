import { UserDetail } from "./LoginResponseType";

interface AutoLoginResult {
    AccessToken: string;
    RefreshToken: string;
    Expiration: string; 
    UserDetail: UserDetail;
  }
  
 export interface AutoLoginResponse { 
    StatusCode: number; 
    Message: string;
    Result: AutoLoginResult;
  }