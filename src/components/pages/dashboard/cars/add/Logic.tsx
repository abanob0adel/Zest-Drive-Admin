/* eslint-disable @typescript-eslint/no-explicit-any */
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

  const appendFormData = (formData: FormData, data: any, parentKey = "") => {
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (value instanceof FileList) return;

      if (typeof value === "boolean") {
        formData.append(fullKey, value ? "true" : "false");
      } else if (typeof value === "object" && !Array.isArray(value)) {
        appendFormData(formData, value, fullKey);
      } else if (Array.isArray(value)) {
        formData.append(fullKey, JSON.stringify(value));
      } else {
        formData.append(fullKey, String(value));
      }
    });
  };

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      const formData = new FormData();

      const excludeKeys = [
        "thumbnail",
        "featured_image",
        "exterior_images",
        "interior_images",
      ];
      const cleanData = Object.fromEntries(
        Object.entries(data).filter(([key]) => !excludeKeys.includes(key))
      );

      appendFormData(formData, cleanData);

      if (data.thumbnail?.[0]) formData.append("thumbnail", data.thumbnail[0]);
      if (data.featured_image?.[0])
        formData.append("featured_image", data.featured_image[0]);

      if (data.exterior_images && data.exterior_images.length > 0) {
        Array.from(data.exterior_images).forEach((file) =>
          formData.append("exterior_images", file)
        );
      }

      if (data.interior_images && data.interior_images.length > 0) {
        Array.from(data.interior_images).forEach((file) =>
          formData.append("interior_images", file)
        );
      }

      const response = await addCarRequest(formData);

      if (response?.car) {
        toast.success("🚗 تم إضافة السيارة بنجاح!");
        reset();
      } else {
        toast.success("🚗 تمت الإضافة بنجاح (بدون تفاصيل إضافية).");
        reset();
      }
    } catch (err: any) {
      console.error("❌ Error adding car:", err);
      toast.error(err.response?.data?.message || "حدث خطأ أثناء الإضافة");
    }
  };

  return { register, handleSubmit, control, onSubmit, isSubmitting };
};
