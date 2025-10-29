"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Controller,
  type Control,
  type UseFormRegister,
} from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  register: UseFormRegister<AddCarTypes>;
  control: Control<AddCarTypes>;
}

export default function SpecificationsSection({ register, control }: Props) {
  return (
    <section className="border border-border rounded-2xl p-6 space-y-8">
      <h2 className="text-lg font-semibold">المواصفات الفنية</h2>

      {/* 🧩 Engine */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          المحرك (Engine)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {/* نوع المحرك */}
          <div>
            <Label>نوع المحرك</Label>
            <Controller
              name="specifications.engine.type"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع المحرك" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Petrol">بنزين</SelectItem>
                    <SelectItem value="Diesel">ديزل</SelectItem>
                    <SelectItem value="Hybrid">هايبرد</SelectItem>
                    <SelectItem value="Electric">كهرباء</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>سعة المحرك</Label>
            <Input
              {...register("specifications.engine.displacement")}
              placeholder="2000"
            />
          </div>

          <div>
            <Label>عدد الأسطوانات</Label>
            <Input
              {...register("specifications.engine.cylinders")}
              placeholder="4"
            />
          </div>

          <div>
            <Label>قوة الحصان</Label>
            <Input
              {...register("specifications.engine.horsepower")}
              placeholder="150"
            />
          </div>

          <div>
            <Label>العزم (نيوتن.متر)</Label>
            <Input
              {...register("specifications.engine.torque")}
              placeholder="250"
            />
          </div>

          <div>
            <Label>نظام الوقود</Label>
            <Controller
              name="specifications.engine.fuel_system"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نظام الوقود" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Direct Injection">
                      Direct Injection
                    </SelectItem>
                    <SelectItem value="Multi Point">Multi Point</SelectItem>
                    <SelectItem value="Turbo">Turbo</SelectItem>
                    <SelectItem value="EV System">EV System</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
      </div>

      {/* 🔁 Transmission */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          ناقل الحركة (Transmission)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>نوع الناقل</Label>
            <Controller
              name="specifications.transmission.type"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الناقل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Automatic">أوتوماتيك</SelectItem>
                    <SelectItem value="Manual">يدوي</SelectItem>
                    <SelectItem value="CVT">CVT</SelectItem>
                    <SelectItem value="DCT">DCT</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label>عدد السرعات</Label>
            <Input
              {...register("specifications.transmission.gears")}
              placeholder="6"
            />
          </div>
        </div>
      </div>

      {/* 🏎 Performance */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          الأداء (Performance)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>السرعة القصوى (كم/س)</Label>
            <Input
              {...register("specifications.performance.top_speed")}
              placeholder="220"
            />
          </div>
          <div>
            <Label>التسارع 0-100 كم/س (ث)</Label>
            <Input
              {...register("specifications.performance.acceleration_0_100")}
              placeholder="8.5"
            />
          </div>
          <div>
            <Label>استهلاك الوقود داخل المدينة</Label>
            <Input
              {...register("specifications.performance.fuel_consumption.city")}
              placeholder="9.5"
            />
          </div>
          <div>
            <Label>استهلاك الوقود على الطرق</Label>
            <Input
              {...register(
                "specifications.performance.fuel_consumption.highway"
              )}
              placeholder="6.5"
            />
          </div>
          <div>
            <Label>استهلاك الوقود الكلي</Label>
            <Input
              {...register(
                "specifications.performance.fuel_consumption.combined"
              )}
              placeholder="7.8"
            />
          </div>
        </div>
      </div>

      {/* 📏 Dimensions */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          الأبعاد (Dimensions)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>الطول (مم)</Label>
            <Input {...register("specifications.dimensions.length")} />
          </div>
          <div>
            <Label>العرض (مم)</Label>
            <Input {...register("specifications.dimensions.width")} />
          </div>
          <div>
            <Label>الارتفاع (مم)</Label>
            <Input {...register("specifications.dimensions.height")} />
          </div>
          <div>
            <Label>قاعدة العجلات (مم)</Label>
            <Input {...register("specifications.dimensions.wheelbase")} />
          </div>
          <div>
            <Label>الخلوص الأرضي (مم)</Label>
            <Input
              {...register("specifications.dimensions.ground_clearance")}
            />
          </div>
          <div>
            <Label>سعة التخزين (لتر)</Label>
            <Input {...register("specifications.dimensions.cargo_capacity")} />
          </div>
          <div>
            <Label>سعة خزان الوقود (لتر)</Label>
            <Input
              {...register("specifications.dimensions.fuel_tank_capacity")}
            />
          </div>
        </div>
      </div>

      {/* ⚖️ Weight */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">الوزن (Weight)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>الوزن الفارغ (كجم)</Label>
            <Input {...register("specifications.weight.curb_weight")} />
          </div>
          <div>
            <Label>الوزن الإجمالي (كجم)</Label>
            <Input {...register("specifications.weight.gross_weight")} />
          </div>
        </div>
      </div>

      {/* 🚘 Wheels */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          العجلات (Wheels)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>مقاس الإطار</Label>
            <Controller
              name="specifications.wheels.size"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="17 inch"
                />
              )}
            />
          </div>
          <div>
            <Label>نوع الإطار</Label>
            <Controller
              name="specifications.wheels.type"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الإطار" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Alloy">Alloy</SelectItem>
                    <SelectItem value="Steel">Steel</SelectItem>
                    <SelectItem value="Carbon Fiber">Carbon Fiber</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
      </div>

      {/* 👥 Capacity */}
      <div className="space-y-3">
        <h3 className="font-semibold text-base text-primary">
          السعة (Capacity)
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label>عدد المقاعد</Label>
            <Controller
              name="specifications.capacity.seating"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر عدد المقاعد" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label>عدد الأبواب</Label>
            <Controller
              name="specifications.capacity.doors"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={String(field.value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر عدد الأبواب" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
