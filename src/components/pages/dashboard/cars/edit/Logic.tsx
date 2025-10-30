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
    formState: { isSubmitting },
  } = useForm<AddCarTypes>({
    shouldUnregister: false,
    defaultValues: initialData || {},
  });

  const didInit = useRef(false);

  useEffect(() => {
    if (initialData && !didInit.current) {
      reset(initialData);
      didInit.current = true;
    }
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<AddCarTypes> = async (values) => {
    console.log("🚀 onSubmit triggered");
    try {
      console.log("🟢 Updated Data:", values);
      const res = await editCarRequest(slug, values);
      if (res) toast.success("تم تعديل السيارة بنجاح");
    } catch (err: any) {
      console.error("❌ EditCar Error:", err);
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء التحديث");
    }
  };

  return { register, handleSubmit, control, onSubmit, isSubmitting };
};
