"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UseFormRegister, Control } from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}

export default function WarrantySection({ register }: Props) {
  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <h2 className="text-lg font-semibold">الضمان (Warranty)</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label>عدد سنوات الضمان</Label>
          <Input
            type="number"
            {...register("warranty.years", { valueAsNumber: true })}
            placeholder="مثلاً: 5"
          />
        </div>

        <div>
          <Label>عدد الكيلومترات</Label>
          <Input
            type="number"
            {...register("warranty.kilometers", { valueAsNumber: true })}
            placeholder="مثلاً: 100000"
          />
        </div>
      </div>

      <div>
        <Label>تفاصيل الضمان بالعربية</Label>
        <Input
          {...register("warranty.description_ar")}
          placeholder="مثلاً: ضمان شامل لمدة 5 سنوات أو 100,000 كم ضد عيوب الصناعة."
        />
      </div>

      <div>
        <Label>Warranty Details (English)</Label>
        <Input
          {...register("warranty.description_en")}
          placeholder="Example: Full 5-year or 100,000 km warranty covering manufacturing defects."
        />
      </div>
    </section>
  );
}
