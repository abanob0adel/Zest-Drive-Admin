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

// 🧩 recursive fill function
function fillFormValues(
  data: Record<string, any>,
  parentKey = "",
  setValue: (name: string, value: any) => void
) {
  Object.entries(data).forEach(([key, value]) => {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      fillFormValues(value, fullKey, setValue);
    } else {
      setValue(fullKey, value);
    }
  });
}

export const useEditCar = ({ slug, initialData }: UseEditArgs) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<AddCarTypes>();

  useEffect(() => {
    if (initialData) {
      const safeSetValue = (name: string, value: any) => {
        setValue(name as any, value);
      };
      fillFormValues(initialData as any, "", safeSetValue);
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
  };
};
