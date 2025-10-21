"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import routes from "@/lib/routes";
import type { AddBrandTypes } from "./types";
import { addBrandRequest } from "./request";
export const useAddBrand = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddBrandTypes>();
  const onSubmit: SubmitHandler<AddBrandTypes> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name_ar", data.name_ar);
      formData.append("name_en", data.name_en);
      formData.append("meta_title", data.meta_title);
      formData.append("meta_description", data.meta_description);
      formData.append("country", data.country);

      if (data.logo && data.logo[0]) {
        formData.append("logo", data.logo[0]);
      }

      const response = await addBrandRequest(
        formData as unknown as AddBrandTypes
      );

      if (response) {
        toast.success("تم إضافة البراند بنجاح");
        reset();
        window.location.href = routes?.Dashboard?.Brand?.Main;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "حدث خطأ أثناء الإرسال");
    }
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
  };
};
