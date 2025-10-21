"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import routes from "@/lib/routes";
import type { EditBrandTypes } from "./types";
import { editBrandRequest } from "./request";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { SingleBrandResponse } from "@/types/Brand";
import { SingleBrandRequest } from "@/shared/requests/singleBrand";
import { useEffect } from "react";
export const useEditBrand = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: singleBrand } = useQuery<SingleBrandResponse>({
    queryKey: ["singleBrand", slug],
    queryFn: () => SingleBrandRequest(slug as string),
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EditBrandTypes>();
  useEffect(() => {
    setValue("name_en", singleBrand?.name_en as string);
    setValue("name_ar", singleBrand?.name_ar as string);
    setValue("country", singleBrand?.country as string);
    setValue("meta_title", singleBrand?.meta_title as string);
    setValue("meta_description", singleBrand?.meta_description as string);
  }, [singleBrand]);
  const onSubmit: SubmitHandler<EditBrandTypes> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name_ar", data.name_ar);
      formData.append("name_en", data.name_en);
      formData.append("country", data.country);
      formData.append("meta_title", data.meta_title);
      formData.append("meta_description", data.meta_description);

      if (data.logo && data.logo[0]) {
        formData.append("logo", data.logo[0]);
      }

      const response = await editBrandRequest(
        formData as unknown as EditBrandTypes,
        slug as string
      );

      if (response) {
        toast.success("تم تعديل البراند بنجاح");
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
