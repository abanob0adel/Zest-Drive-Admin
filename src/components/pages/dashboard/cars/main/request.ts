import { axios } from "@/lib/axios";
import type { SingleBrandResponse } from "@/types/Brand";

export const getAllcars = async (): Promise<SingleBrandResponse[]> => {
  const response = await axios.get(`cars`);
  return response.data;
};
