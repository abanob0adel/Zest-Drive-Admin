import { axios } from "@/lib/axios";
import type { EditBrandTypes } from "./types";
import type { SingleBrandResponse } from "@/types/Brand";

export const editBrandRequest = async (
  data: EditBrandTypes,
  slug: string
): Promise<SingleBrandResponse> => {
  const response = await axios.put(`brands/${slug}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
