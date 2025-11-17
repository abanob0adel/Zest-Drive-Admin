import { axios } from "@/lib/axios";
import type { LoginResponse, LoginTypes } from "./types";

export const loginRequest = async (
  data: LoginTypes
): Promise<LoginResponse> => {
  const response = await axios.post(`auth/login`, data);
  return response.data;
};
