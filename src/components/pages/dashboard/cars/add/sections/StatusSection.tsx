"use client";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Controller, type Control } from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  control: Control<AddCarTypes>;
}

export default function StatusSection({ control }: Props) {
  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <h2 className="text-lg font-semibold">الحالة العامة (Status)</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <Label className="flex items-center gap-2">
          <Controller
            name="is_active"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={!!field.value}
                onCheckedChange={(checked) => field.onChange(!!checked)}
              />
            )}
          />
          مفعّلة (السيارة ظاهرة في الموقع)
        </Label>

        <Label className="flex items-center gap-2">
          <Controller
            name="is_featured"
            control={control}
            render={({ field }) => (
              <Checkbox
                checked={!!field.value}
                onCheckedChange={(checked) => field.onChange(!!checked)}
              />
            )}
          />
          سيارة مميزة (تظهر في الصفحة الرئيسية)
        </Label>
      </div>
    </section>
  );
}
