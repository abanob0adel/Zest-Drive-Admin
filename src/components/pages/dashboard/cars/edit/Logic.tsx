/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import type { AddCarTypes } from "../add/types";
import { editCarRequest } from "./request";

type UseEditArgs = {
  slug: string;
  initialData: AddCarTypes;
};

export const useEditCar = ({ slug, initialData }: UseEditArgs) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = useForm<AddCarTypes>();

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        setValue(key as keyof AddCarTypes, value as any);
      });
    }
  }, [initialData, setValue]);

  const onSubmit: SubmitHandler<AddCarTypes> = async (values) => {
    try {
      console.log("🟢 Updated Data:", values);
      const res = await editCarRequest(slug, values);
      if (res) toast.success("تم تعديل السيارة بنجاح");
    } catch (err: any) {
      console.error("❌ EditCar Error:", err);
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء التحديث");
    }
  };

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
    isSubmitting,
    setValue,
    getValues,
  };
};
