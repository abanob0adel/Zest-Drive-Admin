import { axios } from "@/lib/axios";
import type { OTPResponse, OTPTypes } from "./types";

export const otpRequest = async (data: OTPTypes): Promise<OTPResponse> => {
  const response = await axios.post(`auth/verify-otp`, data);
  return response.data;
};
