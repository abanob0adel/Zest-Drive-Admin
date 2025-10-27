"use client";

import { toast } from "sonner";
import { deleteCarRequest } from "./request";

export const useDeleteCar = () => {
  const handleDelete = async (slug: string) => {
    try {
      const response = await deleteCarRequest(slug);
      if (response) {
        toast.success("تم الحذف بنجاح");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    handleDelete,
  };
};
