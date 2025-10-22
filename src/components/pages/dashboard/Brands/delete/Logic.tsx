"use client";

import { toast } from "sonner";
import { deleteBrandRequest } from "./request";

export const useDeleteBrand = () => {
  const handleDelete = async (slug: string) => {
    try {
      const response = await deleteBrandRequest(slug);
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
