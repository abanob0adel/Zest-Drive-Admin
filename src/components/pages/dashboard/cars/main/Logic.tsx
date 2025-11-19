import { useQuery } from "@tanstack/react-query";
import { getAllcars } from "./request";
import type { CarListResponse } from "./types";
import { useState } from "react";

export const useGetCars = () => {
  const [page, setPage] = useState<number>(1);
  const limit = 20;

  const { data: cars, isFetching } = useQuery<CarListResponse>({
    queryKey: ["cars", page],
    queryFn: () => getAllcars(page, limit),
  });

  return { cars, isFetching, page, setPage };
};
