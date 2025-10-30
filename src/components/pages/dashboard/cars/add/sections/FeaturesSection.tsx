"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Controller, type Control } from "react-hook-form";
import type { AddCarTypes } from "../types";
import { Input } from "@/components/ui/input";

interface Props {
  control: Control<AddCarTypes>;
}

export default function FeaturesSection({ control }: Props) {
  const [activeTab, setActiveTab] = useState("safety");

  const renderCheckbox = (name: keyof AddCarTypes | string, label: string) => (
    <Label className="flex items-center gap-2">
      <Controller
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={!!field.value}
            onCheckedChange={(checked) => field.onChange(!!checked)}
          />
        )}
      />
      {label}
    </Label>
  );

  return (
    <section className="border border-border rounded-2xl p-6 space-y-6">
      <h2 className="text-lg font-semibold">المميزات (Features)</h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} dir="rtl">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="safety">أنظمة الأمان</TabsTrigger>
          <TabsTrigger value="comfort">الراحة</TabsTrigger>
          <TabsTrigger value="tech">التقنيات</TabsTrigger>
          <TabsTrigger value="exterior">الخارجية</TabsTrigger>
        </TabsList>

        {/* 🛡️ Safety */}
        <TabsContent value="safety" className="pt-4 grid md:grid-cols-3 gap-3">
          <div>
            <Label>عدد الوسائد الهوائية</Label>
            <Controller
              name="safety_features.airbags"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  min={0}
                  placeholder="مثلاً: 6"
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(Number(e.target.value) || 0)}
                />
              )}
            />
          </div>
          {renderCheckbox("safety_features.traction_control", "التحكم بالجر")}
          {renderCheckbox(
            "safety_features.stability_control",
            "التحكم بالثبات"
          )}
          {renderCheckbox("safety_features.parking_sensors", "حساسات ركن")}
          {renderCheckbox("safety_features.rear_camera", "كاميرا خلفية")}
          {renderCheckbox(
            "safety_features.blind_spot_monitor",
            "تحذير النقطة العمياء"
          )}
          {renderCheckbox(
            "safety_features.lane_departure_warning",
            "تحذير مغادرة المسار"
          )}
          {renderCheckbox("safety_features.cruise_control", "مثبّت سرعة")}
          {renderCheckbox(
            "safety_features.adaptive_cruise_control",
            "مثبّت سرعة ذكي"
          )}
          {renderCheckbox("safety_features.collision_warning", "تحذير التصادم")}
          {renderCheckbox(
            "safety_features.automatic_emergency_braking",
            "الفرملة التلقائية"
          )}
        </TabsContent>

        {/* 🛋 Comfort */}
        <TabsContent value="comfort" className="pt-4 grid md:grid-cols-3 gap-3">
          {renderCheckbox("comfort_features.air_conditioning", "تكييف هواء")}
          {renderCheckbox("comfort_features.sunroof", "فتحة سقف")}
          {renderCheckbox("comfort_features.panoramic_roof", "سقف بانوراما")}
          {renderCheckbox("comfort_features.leather_seats", "مقاعد جلد")}
          {renderCheckbox("comfort_features.power_seats", "مقاعد كهربائية")}
          {renderCheckbox("comfort_features.heated_seats", "مقاعد مدفأة")}
          {renderCheckbox("comfort_features.ventilated_seats", "مقاعد مهواة")}
          {renderCheckbox("comfort_features.push_start_button", "زر تشغيل")}
          {renderCheckbox("comfort_features.keyless_entry", "دخول بدون مفتاح")}
          {renderCheckbox("comfort_features.cruise_control", "مثبّت سرعة")}
          {renderCheckbox("comfort_features.wireless_charging", "شحن لاسلكي")}
        </TabsContent>

        {/* 💡 Technology */}
        <TabsContent value="tech" className="pt-4 grid md:grid-cols-3 gap-3">
          {renderCheckbox("technology_features.apple_carplay", "Apple CarPlay")}
          {renderCheckbox("technology_features.android_auto", "Android Auto")}
          {renderCheckbox("technology_features.bluetooth", "Bluetooth")}
          {renderCheckbox(
            "technology_features.navigation_system",
            "نظام ملاحة"
          )}
          {renderCheckbox("technology_features.digital_cluster", "عداد رقمي")}
          {renderCheckbox(
            "technology_features.head_up_display",
            "عرض بيانات على الزجاج"
          )}
          {renderCheckbox(
            "technology_features.ambient_lighting",
            "إضاءة داخلية"
          )}
        </TabsContent>

        {/* 🚘 Exterior */}
        <TabsContent
          value="exterior"
          className="pt-4 grid md:grid-cols-3 gap-3"
        >
          {renderCheckbox(
            "exterior_features.led_headlights",
            "مصابيح LED أمامية"
          )}
          {renderCheckbox(
            "exterior_features.led_daytime_running_lights",
            "إضاءة نهارية"
          )}
          {renderCheckbox("exterior_features.fog_lights", "كشافات ضباب")}
          {renderCheckbox("exterior_features.power_mirrors", "مرايا كهربائية")}
          {renderCheckbox("exterior_features.heated_mirrors", "مرايا مدفأة")}
          {renderCheckbox(
            "exterior_features.auto_folding_mirrors",
            "مرايا قابلة للطي تلقائيًا"
          )}
          {renderCheckbox(
            "exterior_features.rain_sensing_wipers",
            "ماسحات أوتوماتيكية"
          )}
          {renderCheckbox("exterior_features.roof_rails", "عوارض سقف")}
          {renderCheckbox("exterior_features.alloy_wheels", "جنوط سبور")}
        </TabsContent>
      </Tabs>
    </section>
  );
}
