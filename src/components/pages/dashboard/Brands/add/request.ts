import { axios } from "@/lib/axios";
import type { AddBrandTypes } from "./types";
import type { SingleBrandResponse } from "@/types/Brand";

export const addBrandRequest = async (
  data: AddBrandTypes
): Promise<SingleBrandResponse> => {
  const response = await axios.post(`brands`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
