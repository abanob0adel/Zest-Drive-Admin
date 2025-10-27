"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import type { AddCarTypes } from "../types";
import MetaKeywordsInput from "@/components/shared/MetaKeywordInput";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}

export default function MetaSection({ register, control }: Props) {
  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <h2 className="text-lg font-semibold">إعدادات الـ SEO</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>العنوان (Meta Title)</Label>
          <Input
            {...register("meta_title")}
            placeholder="تويوتا كامري 2025 - الموديل الجديد"
          />
        </div>

        <div>
          <Label>الوصف (Meta Description)</Label>
          <Textarea
            {...register("meta_description")}
            placeholder="تعرف على أحدث مواصفات وأسعار تويوتا كامري 2025 في الأسواق."
          />
        </div>
      </div>

      <div>
        <Label>الكلمات المفتاحية (افصل بينها بفاصلة أو مسافة)</Label>
        <Controller
          name="meta_keywords"
          control={control}
          render={({ field }) => (
            <MetaKeywordsInput value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
    </section>
  );
}
