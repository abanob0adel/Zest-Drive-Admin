"use client";
import { useMemo } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import type { AddCarTypes } from "../add/types";
import { editCarRequest } from "./request";

type UseEditArgs = {
  slug: string;
  initialData: AddCarTypes;
};

export const useEditCar = ({ slug, initialData }: UseEditArgs) => {
  const defaultValues = useMemo(
    () => initialData,
    [JSON.stringify(initialData)]
  );

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<AddCarTypes>({
    shouldUnregister: false,
    mode: "onChange",
    defaultValues, // ✅ استخدام defaultValues بدل useEffect
  });

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      console.log("📤 Submitting data:", data);

      // تأكد من البيانات الحالية
      const finalData = getValues();
      console.log("📤 Final data:", finalData);

      const response = await editCarRequest(slug, finalData);
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
