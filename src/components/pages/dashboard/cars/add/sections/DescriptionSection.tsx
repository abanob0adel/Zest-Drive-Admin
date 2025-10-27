"use client";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Control, UseFormRegister } from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}

export default function DescriptionSection({ register }: Props) {
  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <h2 className="text-lg font-semibold">الوصف العام</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>الوصف بالعربية</Label>
          <Textarea
            {...register("description_ar")}
            placeholder="اكتب وصف السيارة بالعربية..."
          />
        </div>
        <div>
          <Label>الوصف بالإنجليزية</Label>
          <Textarea
            {...register("description_en")}
            placeholder="Write the English description..."
          />
        </div>
      </div>
    </section>
  );
}
