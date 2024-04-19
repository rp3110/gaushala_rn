export type UserDetail = {
    Id: string;
    UserName: string;
    Email: string;
    city: string;
    Mobile: string; // Consider using a number type if Mobile is numeric
    IsTrustee: boolean;
  }
  
  interface ResponseResult {
    Token: string;
    RefreshToken: string;
    Expiration: string; 
    RefreshTokenExpiration: string;
    Id: string;
    UserDetail: UserDetail;
  }
  
  export default interface LoginResponse { 
    StatusCode: number; 
    Message: string;
    Result: ResponseResult;
  }
  