export interface OTPTypes {
  email: string;
  otp: string;
}
export interface OTPResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
}
