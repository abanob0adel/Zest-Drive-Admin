export interface OTPTypes {
  email: string;
  otp: string;
}
export interface OTPResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
}
