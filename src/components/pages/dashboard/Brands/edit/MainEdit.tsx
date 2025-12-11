"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEditBrand } from "./Logic";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";
import UploadImage from "@/components/shared/upload/UploadImage";

export default function MainEdit() {
  const { register, handleSubmit, onSubmit, isSubmitting, control } =
    useEditBrand();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="lg:w-1/2 w-full p-8 border border-border rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            placeholder="اسم البراند باللغة العربية"
            type="text"
            {...register("name_ar", { required: true })}
          />
          <Input
            placeholder="اسم البراند باللغة الانجليزية"
            type="text"
            {...register("name_en", { required: true })}
          />
          <Input
            placeholder="بلد الصناعة"
            type="text"
            {...register("country", { required: true })}
          />
          <Input
            placeholder="meta_title"
            type="text"
            {...register("meta_title")}
          />
          <Textarea
            placeholder="meta_desctiption"
            {...register("meta_description")}
          />
          <Controller
            name="logo"
            control={control}
            render={({ field }) => (
              <UploadImage
                label="شعار البراند"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "جاري الإضافة..." : "تعديل البراند الآن"}
          </Button>
        </form>
      </div>
    </div>
  );
}
