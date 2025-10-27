import { useQuery } from "@tanstack/react-query";

import { getAllcars } from "./request";
import type { CarListResponse } from "./types";

export const useGetCars = () => {
  const { data: cars, isFetching } = useQuery<CarListResponse>({
    queryKey: ["cars"],
    queryFn: () => getAllcars(),
  });
  return { cars, isFetching };
};
