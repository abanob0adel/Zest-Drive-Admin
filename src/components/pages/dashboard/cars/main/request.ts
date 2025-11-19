import { axios } from "@/lib/axios";
import type { CarListResponse } from "./types";

export const getAllcars = async (
  page: number,
  limit: number
): Promise<CarListResponse> => {
  const response = await axios.get(`cars?page=${page}&limit=${limit}`);
  return response.data;
};
