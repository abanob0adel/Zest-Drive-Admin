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
    reset,
    formState: { isSubmitting },
  } = useForm<AddCarTypes>({
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData) reset(initialData);
  }, [initialData, reset]);

  const appendFormData = (
    formData: FormData,
    data: any,
    parentKey?: string
  ) => {
    Object.entries(data ?? {}).forEach(([key, value]: [string, any]) => {
      const fullKey = parentKey ? `${parentKey}[${key}]` : key;
      if (value instanceof FileList) return;
      if (typeof value === "boolean") {
        formData.append(fullKey, value ? "true" : "false");
      } else if (typeof value === "object" && !Array.isArray(value)) {
        appendFormData(formData, value, fullKey);
      } else if (Array.isArray(value)) {
        formData.append(fullKey, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(fullKey, String(value));
      }
    });
  };

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      const formData = new FormData();
      appendFormData(formData, data);
      if ((data as any).thumbnail?.[0])
        formData.append("thumbnail", (data as any).thumbnail[0]);
      if ((data as any).featured_image?.[0])
        formData.append("featured_image", (data as any).featured_image[0]);
      if ((data as any).exterior_images) {
        Array.from((data as any).exterior_images as FileList).forEach(
          (f: File) => formData.append("exterior_images", f)
        );
      }
      if ((data as any).interior_images) {
        Array.from((data as any).interior_images as FileList).forEach(
          (f: File) => formData.append("interior_images", f)
        );
      }
      const res = await editCarRequest(slug, formData);
      if (res) {
        toast.success("تم تحديث السيارة بنجاح");
      } else {
        toast.success("تم التحديث");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "حدث خطأ أثناء التحديث");
    }
  };

  return { register, handleSubmit, control, onSubmit, isSubmitting };
};
