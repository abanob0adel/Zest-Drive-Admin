import { axios } from "@/lib/axios";
export const addCarRequest = async (data: FormData) => {
  const response = await axios.post("/cars", data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
