"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddBrand } from "./Logic";

export default function AddBrand() {
  const { register, handleSubmit, onSubmit, isSubmitting } = useAddBrand();

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
          <Input type="file" accept="image/*" {...register("logo")} />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "جاري الإضافة..." : "أضف البراند الآن"}
          </Button>
        </form>
      </div>
    </div>
  );
}
