import { axios } from "@/lib/axios";

export const deleteBrandRequest = async (slug: string) => {
  const response = await axios.delete(`brands/${slug}`);
  return response.data;
};
