import { axios } from "@/lib/axios";
import type { CarListResponse } from "./types";

export const getAllcars = async (): Promise<CarListResponse> => {
  const response = await axios.get(`cars`);
  return response.data;
};
