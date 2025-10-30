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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const editCarRequest = async (slug: string, data: any) => {
  const res = await axios.put(`cars/${slug}`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};
