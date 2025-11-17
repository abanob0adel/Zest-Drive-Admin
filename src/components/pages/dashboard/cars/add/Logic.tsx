"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import type { AddCarTypes } from "./types";
import { addCarRequest } from "./request";

export const useAddCar = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<AddCarTypes>();

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await addCarRequest(data as any);
      if (response) {
        toast.success("تمت إضافة السيارة بنجاح");
        reset();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error("حدث خطأ أثناء الإضافة");
    }
  };

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
    isSubmitting,
  };
};
