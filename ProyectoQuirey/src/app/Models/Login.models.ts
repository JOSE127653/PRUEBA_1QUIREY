export interface login {
   username: string ;
  idUsername: string ;
  userpassword: string ;
 
  }
  
  export interface ApiResponse {
    StatusCode: number;
    success: boolean;
    fecha: string;
    message: string;
    response: {
      data: login [];
    };
  }

