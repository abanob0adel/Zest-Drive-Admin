import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { UseFormRegister } from "react-hook-form";
import type { AddCarTypes } from "../types";

interface Props {
  register: UseFormRegister<AddCarTypes>;
}

export default function MediaUpload({ register }: Props) {
  return (
    <div className="border border-border p-6 rounded-2xl space-y-4">
      <h2 className="font-bold text-lg">الوسائط (الصور والفيديو)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>صورة الغلاف الرئيسية</Label>
          <Input type="file" {...register("featured_image")} accept="image/*" />
        </div>
        <div>
          <Label>الصورة المصغرة</Label>
          <Input type="file" {...register("thumbnail")} accept="image/*" />
        </div>
        <div>
          <Label>صور خارجية</Label>
          <Input
            type="file"
            {...register("exterior_images")}
            multiple
            accept="image/*"
          />
        </div>
        <div>
          <Label>صور داخلية</Label>
          <Input
            type="file"
            {...register("interior_images")}
            multiple
            accept="image/*"
          />
        </div>
        <div className="md:col-span-2">
          <Label>رابط فيديو (اختياري)</Label>
          <Input
            {...register("video_url")}
            placeholder="https://vimeo.com/..."
          />
        </div>
      </div>
    </div>
  );
}
