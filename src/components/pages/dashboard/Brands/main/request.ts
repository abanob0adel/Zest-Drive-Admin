import { axios } from "@/lib/axios";
import type { SingleBrandResponse } from "@/types/Brand";

export const getAllBrands = async (): Promise<SingleBrandResponse[]> => {
  const response = await axios.get(`brands`);
  return response.data;
};
