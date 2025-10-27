/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { Car } from "../pages/dashboard/cars/main/types";
import { Separator } from "../ui/separator";

interface Props {
  car: Car;
  open: boolean;
  onClose: () => void;
}

export default function CarDetailsDialog({ car, open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[80%] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-right">
            تفاصيل السيارة: {car.model_name_ar} ({car.model_name_en})
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4" dir="rtl">
          <TabsList className="grid grid-cols-6 mb-6">
            <TabsTrigger value="overview">عام</TabsTrigger>
            <TabsTrigger value="specs">المواصفات</TabsTrigger>
            <TabsTrigger value="features">المميزات</TabsTrigger>
            <TabsTrigger value="warranty">الضمان</TabsTrigger>
            <TabsTrigger value="media">الصور والفيديو</TabsTrigger>
            <TabsTrigger value="variants">الفئات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p>
                <strong>العلامة:</strong>{" "}
                {typeof car.brand === "string" ? car.brand : car.brand?.name_ar}
              </p>
              <p>
                <strong>الفئة:</strong> {car.category}
              </p>
              <p>
                <strong>نوع الهيكل:</strong> {car.body_type || "-"}
              </p>
              <p>
                <strong>بلد المنشأ:</strong> {car.origin_country || "-"}
              </p>
              <p>
                <strong>بلد التجميع:</strong> {car.assembly_country || "-"}
              </p>
              <p>
                <strong>الحالة:</strong> {car.is_active ? "مفعلة" : "غير مفعلة"}
              </p>
              <p>
                <strong>سيارة مميزة:</strong> {car.is_featured ? "نعم" : "لا"}
              </p>
              <p>
                <strong>عدد المشاهدات:</strong> {car.views_count}
              </p>
              <p>
                <strong>تاريخ الإنشاء:</strong>{" "}
                {new Date(car.createdAt).toLocaleDateString("ar-EG")}
              </p>
              <p>
                <strong>آخر تحديث:</strong>{" "}
                {new Date(car.updatedAt).toLocaleDateString("ar-EG")}
              </p>
            </div>

            <Separator />
            <div>
              <strong>الوصف بالعربية:</strong>
              <p className="text-muted-foreground">
                {car.description_ar || "لا يوجد وصف"}
              </p>
            </div>
            <div>
              <strong>الوصف بالإنجليزية:</strong>
              <p className="text-muted-foreground">
                {car.description_en || "No description"}
              </p>
            </div>

            <Separator />
            <div>
              <strong>Meta Title:</strong> {car.meta_title || "-"}
              <br />
              <strong>Meta Description:</strong> {car.meta_description || "-"}
              <br />
              <strong>Meta Keywords:</strong>{" "}
              {car.meta_keywords?.length ? car.meta_keywords.join(", ") : "-"}
            </div>
          </TabsContent>

          <TabsContent value="specs" className="space-y-6 text-sm">
            {car.specifications ? (
              <>
                <div>
                  <h4 className="font-semibold text-primary">⚙️ المحرك</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>النوع: {car.specifications.engine?.type || "-"}</p>
                    <p>
                      السعة اللترية:{" "}
                      {car.specifications.engine?.displacement || "-"}
                    </p>
                    <p>
                      الأسطوانات: {car.specifications.engine?.cylinders || "-"}
                    </p>
                    <p>
                      القوة: {car.specifications.engine?.horsepower || "-"} حصان
                    </p>
                    <p>
                      العزم: {car.specifications.engine?.torque || "-"}{" "}
                      نيوتن.متر
                    </p>
                    <p>
                      نظام الوقود:{" "}
                      {car.specifications.engine?.fuel_system || "-"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">🔁 ناقل الحركة</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>النوع: {car.specifications.transmission?.type || "-"}</p>
                    <p>
                      عدد السرعات:{" "}
                      {car.specifications.transmission?.gears || "-"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">🏎 الأداء</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>
                      السرعة القصوى:{" "}
                      {car.specifications.performance?.top_speed || "-"}
                    </p>
                    <p>
                      التسارع 0-100 كم/س:{" "}
                      {car.specifications.performance?.acceleration_0_100 ||
                        "-"}
                    </p>
                    <p>
                      استهلاك الوقود (مدينة):{" "}
                      {car.specifications.performance?.fuel_consumption?.city ||
                        "-"}
                    </p>
                    <p>
                      استهلاك الوقود (طرق):{" "}
                      {car.specifications.performance?.fuel_consumption
                        ?.highway || "-"}
                    </p>
                    <p>
                      استهلاك الوقود (كلي):{" "}
                      {car.specifications.performance?.fuel_consumption
                        ?.combined || "-"}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">📏 الأبعاد</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>الطول: {car.specifications.dimensions?.length} مم</p>
                    <p>العرض: {car.specifications.dimensions?.width} مم</p>
                    <p>الارتفاع: {car.specifications.dimensions?.height} مم</p>
                    <p>
                      قاعدة العجلات: {car.specifications.dimensions?.wheelbase}{" "}
                      مم
                    </p>
                    <p>
                      الخلوص الأرضي:{" "}
                      {car.specifications.dimensions?.ground_clearance} مم
                    </p>
                    <p>
                      سعة الشنطة:{" "}
                      {car.specifications.dimensions?.cargo_capacity} لتر
                    </p>
                    <p>
                      سعة خزان الوقود:{" "}
                      {car.specifications.dimensions?.fuel_tank_capacity} لتر
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">⚖️ الوزن</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>
                      الوزن الفارغ: {car.specifications.weight?.curb_weight} كجم
                    </p>
                    <p>
                      الوزن الكلي: {car.specifications.weight?.gross_weight} كجم
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">🛞 العجلات</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>المقاس: {car.specifications.wheels?.size}</p>
                    <p>النوع: {car.specifications.wheels?.type}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary">🚘 السعة</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <p>عدد المقاعد: {car.specifications.capacity?.seating}</p>
                    <p>عدد الأبواب: {car.specifications.capacity?.doors}</p>
                  </div>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground">لا توجد بيانات مواصفات</p>
            )}
          </TabsContent>

          <TabsContent
            value="features"
            className="grid grid-cols-3 gap-3 text-sm"
          >
            {Object.entries({
              ...car.safety_features,
              ...car.comfort_features,
              ...car.technology_features,
              ...car.exterior_features,
            })
              .filter(([_, v]) => v)
              .map(([key]) => (
                <div key={key} className="flex items-center gap-2">
                  ✅ <span>{key.replace(/_/g, " ")}</span>
                </div>
              ))}
          </TabsContent>

          <TabsContent value="warranty" className="text-sm space-y-3">
            {car.warranty ? (
              <>
                <p>
                  <strong>عدد السنوات:</strong> {car.warranty.years || "-"}
                </p>
                <p>
                  <strong>عدد الكيلومترات:</strong>{" "}
                  {car.warranty.kilometers || "-"}
                </p>
                <p>
                  <strong>الوصف بالعربية:</strong>{" "}
                  {car.warranty.description_ar || "-"}
                </p>
                <p>
                  <strong>الوصف بالإنجليزية:</strong>{" "}
                  {car.warranty.description_en || "-"}
                </p>
              </>
            ) : (
              <p className="text-muted-foreground">لا توجد بيانات ضمان</p>
            )}
          </TabsContent>

          <TabsContent value="media" className="space-y-4">
            {car.video_url && (
              <div>
                <h4 className="font-semibold text-primary">🎥 الفيديو</h4>
                <video
                  src={car.video_url}
                  controls
                  className="w-full rounded-lg"
                />
              </div>
            )}
            <div>
              <h4 className="font-semibold text-primary mb-2">📸 الصور</h4>
              <div className="grid grid-cols-3 gap-3">
                {car.images?.thumbnail && (
                  <img
                    src={car.images.thumbnail}
                    alt="Thumbnail"
                    className="rounded-lg w-full h-40 object-cover border"
                  />
                )}
                {car.images?.featured_image && (
                  <img
                    src={car.images.featured_image}
                    alt="Featured"
                    className="rounded-lg w-full h-40 object-cover border"
                  />
                )}
                {car.images?.exterior?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Exterior ${i}`}
                    className="rounded-lg w-full h-40 object-cover border"
                  />
                ))}
                {car.images?.interior?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Interior ${i}`}
                    className="rounded-lg w-full h-40 object-cover border"
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="variants" className="space-y-4 text-sm">
            {car.variants?.length ? (
              car.variants.map((variant, i) => (
                <div key={i} className="border rounded-lg p-3">
                  <p>
                    <strong>الاسم:</strong> {variant.name_ar} ({variant.name_en}
                    )
                  </p>
                  <p>
                    <strong>السنة:</strong> {variant.year}
                  </p>
                  <p>
                    <strong>السعر:</strong> {variant.price || "غير محدد"}
                  </p>
                  {variant.price_range && (
                    <p>
                      <strong>نطاق السعر:</strong> من {variant.price_range.min}{" "}
                      إلى {variant.price_range.max}
                    </p>
                  )}
                  <p>
                    <strong>الحالة:</strong> {variant.availability}
                  </p>
                  {variant.features?.length ? (
                    <p>
                      <strong>المميزات:</strong> {variant.features.join(", ")}
                    </p>
                  ) : (
                    <p className="text-muted-foreground">لا توجد مميزات</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">لا توجد فئات حالياً</p>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
