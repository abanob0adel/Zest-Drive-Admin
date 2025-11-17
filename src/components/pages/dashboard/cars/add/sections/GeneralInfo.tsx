"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import { type AddCarTypes, type CarCategory } from "../types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetBrands } from "../../../Brands/main/Logic";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}
const categories: CarCategory[] = [
  "sedan",
  "suv",
  "hatchback",
  "coupe",
  "crossover",
  "van",
  "pickup",
  "convertible",
  "wagon",
];
export default function GeneralInfo({ register, control }: Props) {
  const { brands, isFetching } = useGetBrands();

  return (
    <div className="border border-border p-6 rounded-2xl space-y-4">
      <h2 className="font-bold text-lg mb-4">المعلومات العامة</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>العلامة التجارية</Label>
          <Controller
            name="brand"
            control={control}
            rules={{ required: "اختيار العلامة التجارية مطلوب" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      isFetching ? "جارٍ التحميل..." : "اختر العلامة التجارية"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {brands &&
                    brands.map((b) => (
                      <SelectItem key={b._id} value={b._id}>
                        {b.name_ar} ({b.name_en})
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label>اسم السيارة بالعربية</Label>
          <Input
            {...register("model_name_ar", { required: true })}
            placeholder="مثلاً: كامري"
          />
        </div>

        <div>
          <Label>اسم السيارة بالإنجليزية</Label>
          <Input
            {...register("model_name_en", { required: true })}
            placeholder="Camry"
          />
        </div>

        <div>
          <Label>فئة السيارة</Label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "اختيار الفئة مطلوب" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الفئة" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <Label>بلد المنشأ</Label>
          <Input {...register("origin_country")} placeholder="Japan" />
        </div>
        <div>
          <Label>بلد التجميع</Label>
          <Input {...register("assembly_country")} placeholder="Egypt" />
        </div>
      </div>
    </div>
  );
}
