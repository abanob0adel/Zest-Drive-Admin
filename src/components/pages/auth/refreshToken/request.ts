import { axios } from "@/lib/axios";
import type { RefreshTokenTypes, RefreshTokenResponse } from "./types";

export const refreshTokenRequest = async (
  data: RefreshTokenTypes
): Promise<RefreshTokenResponse> => {
  const response = await axios.post(`auth/refresh-token`, data);
  return response.data;
};
