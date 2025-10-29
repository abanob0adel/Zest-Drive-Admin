import { axios } from "@/lib/axios";
import type { CarDetailsResponse } from "../main/types";

export const getCarDetails = async (
  slug: string
): Promise<CarDetailsResponse> => {
  const res = await axios.get(`cars/${slug}`);
  const car = res.data;
  return {
    ...car,
    brand: car.brand?._id || car.brand,
  };
};

export const editCarRequest = async (slug: string, data: FormData) => {
  const res = await axios.put(`cars/${slug}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
