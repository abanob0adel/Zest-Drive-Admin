/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
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
    reset,
    getValues,
    formState: { isSubmitting },
  } = useForm<AddCarTypes>({
    defaultValues: initialData,
  });

  // ✅ استخدم ref عشان نمنع reset من التكرار بعد أول تحميل
  const didInit = useRef(false);

  useEffect(() => {
    if (!didInit.current && initialData) {
      reset(initialData);
      didInit.current = true;
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<AddCarTypes> = async () => {
    try {
      const currentValues = getValues();
      console.log("🔹 Updated Data:", currentValues);

      const res = await editCarRequest(slug, currentValues as any);
      if (res) toast.success("تم تعديل السيارة بنجاح");
    } catch (err: any) {
      console.error("❌ EditCar Error:", err);
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء التحديث");
    }
  };

  return { register, handleSubmit, control, onSubmit, isSubmitting };
};
