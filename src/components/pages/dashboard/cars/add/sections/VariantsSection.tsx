"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  useFieldArray,
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}

const FeaturesTextarea = ({
  value,
  onChange,
}: {
  value?: string[];
  onChange: (features: string[]) => void;
}) => {
  const [text, setText] = useState(value?.join(", ") || "");

  const handleBlur = () => {
    const features = text
      .split(",")
      .map((f) => f.trim())
      .filter(Boolean);
    onChange(features);
  };

  return (
    <Textarea
      placeholder="مثلاً: ABS, فتحة سقف, مثبت سرعة"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleBlur}
    />
  );
};

export default function VariantsSection({ register, control }: Props) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">الفئات (Variants)</h2>
        <Button
          type="button"
          onClick={() =>
            append({
              name_ar: "",
              name_en: "",
              year: new Date().getFullYear(),
              availability: "available",
              features: [],
            })
          }
        >
          + أضف فئة
        </Button>
      </div>

      {fields.map((field, i) => (
        <div
          key={field.id}
          className="grid md:grid-cols-3 gap-4 border p-4 rounded-xl"
        >
          <div>
            <Label>اسم الفئة بالعربية</Label>
            <Input
              {...register(`variants.${i}.name_ar`)}
              placeholder="مثلاً: فئة GLX"
            />
          </div>

          <div>
            <Label>اسم الفئة بالإنجليزية</Label>
            <Input
              {...register(`variants.${i}.name_en`)}
              placeholder="e.g. GLX Trim"
            />
          </div>

          {/* Year */}
          <div>
            <Label>السنة</Label>
            <Input {...register(`variants.${i}.year`)} placeholder="2025" />
          </div>

          <div>
            <Label>السعر الأساسي</Label>
            <Input {...register(`variants.${i}.price`)} placeholder="250000" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>نطاق السعر (اختياري)</Label>
            <div className="flex gap-2">
              <Input
                type="number"
                {...register(`variants.${i}.price_range.min`)}
                placeholder="أقل سعر"
              />
              <Input
                type="number"
                {...register(`variants.${i}.price_range.max`)}
                placeholder="أعلى سعر"
              />
            </div>
          </div>

          <div>
            <Label>الحالة</Label>
            <Controller
              name={`variants.${i}.availability`}
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value || "available"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الحالة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متوفرة</SelectItem>
                    <SelectItem value="upcoming">قريباً</SelectItem>
                    <SelectItem value="discontinued">متوقفة</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>تاريخ الإصدار</Label>
            <Input type="date" {...register(`variants.${i}.release_date`)} />
          </div>

          <div className="md:col-span-3">
            <Label>المميزات (افصل بين كل ميزة بفاصلة ,)</Label>
            <Controller
              name={`variants.${i}.features`}
              control={control}
              render={({ field }) => (
                <FeaturesTextarea
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          <div className="md:col-span-3 flex justify-end">
            <Button
              variant="destructive"
              type="button"
              onClick={() => remove(i)}
            >
              حذف الفئة
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
