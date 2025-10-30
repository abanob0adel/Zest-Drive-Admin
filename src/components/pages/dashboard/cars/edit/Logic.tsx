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
    formState: { isSubmitting, errors },
  } = useForm<AddCarTypes>({
    shouldUnregister: false,
    mode: "onChange",
    defaultValues: initialData,
  });

  const isFirstLoad = useRef(true);
  useEffect(() => {
    if (initialData && isFirstLoad.current) {
      reset(initialData, {
        keepDirty: false,
        keepTouched: false,
      });
      isFirstLoad.current = false;
    }
  }, []);

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      console.log("📤 Submitting data:", data);
      const response = await editCarRequest(slug, data);
      console.log("✅ Response:", response);
      toast.success("تم تعديل السيارة بنجاح");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("❌ Error:", err);
      const errorMessage =
        err?.response?.data?.message || "حدث خطأ أثناء التحديث";
      toast.error(errorMessage);
    }
  };

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
    isSubmitting,
    getValues,
    errors,
  };
};
