import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "./request";
import type { SingleBrandResponse } from "@/types/Brand";

export const useGetBrands = () => {
  const { data: brands, isFetching } = useQuery<SingleBrandResponse[]>({
    queryKey: ["brands"],
    queryFn: () => getAllBrands(),
  });
  return { brands, isFetching };
};
