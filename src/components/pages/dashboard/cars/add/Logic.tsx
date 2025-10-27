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

  const onSubmit: SubmitHandler<AddCarTypes> = async (data) => {
    try {
      const formData = new FormData();

      const excludeKeys = [
        "thumbnail",
        "featured_image",
        "exterior_images",
        "interior_images",
      ];

      Object.entries(data).forEach(([key, value]) => {
        if (excludeKeys.includes(key)) return;
        if (value === undefined || value === null) return;

        // ✅ لو boolean نحولها string
        if (typeof value === "boolean") {
          formData.append(key, value ? "true" : "false");
          return;
        }

        // ✅ لو object من النوع "specifications"
        if (key === "specifications" && typeof value === "object") {
          const specs = value as Record<string, any>;
          Object.entries(specs).forEach(([subKey, subVal]) => {
            if (typeof subVal === "object" && subVal !== null) {
              Object.entries(subVal).forEach(([innerKey, innerVal]) => {
                formData.append(
                  `specifications.${subKey}.${innerKey}`,
                  String(innerVal)
                );
              });
            } else {
              formData.append(`specifications.${subKey}`, String(subVal));
            }
          });
          return;
        }

        // ✅ لو object تاني (زي warranty أو features)
        if (typeof value === "object" && !Array.isArray(value)) {
          Object.entries(value).forEach(([subKey, subVal]) => {
            if (subVal !== undefined && subVal !== null)
              formData.append(`${key}.${subKey}`, String(subVal));
          });
          return;
        }

        // ✅ لو array (زي meta_keywords, variants)
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
          return;
        }

        formData.append(key, String(value));
      });

      // ✅ الصور
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
