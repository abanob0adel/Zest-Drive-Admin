import { axios } from "@/lib/axios";

export const deleteCarRequest = async (slug: string) => {
  const response = await axios.delete(`cars/${slug}`);
  return response.data;
};
