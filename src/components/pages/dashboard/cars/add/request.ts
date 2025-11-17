import { axios } from "@/lib/axios";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addCarRequest = async (data: any) => {
  const response = await axios.post("/cars", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
