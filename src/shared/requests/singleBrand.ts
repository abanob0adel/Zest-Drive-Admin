import { axios } from "@/lib/axios";
import type { SingleBrandResponse } from "@/types/Brand";

export const SingleBrandRequest = async (
  slug: string
): Promise<SingleBrandResponse> => {
  const response = await axios.get(`brands/${slug}`, {});
  return response.data;
};
