"use client";
import { Button } from "@/components/ui/button";
import { useAddCar } from "./Logic";
import GeneralInfo from "./sections/GeneralInfo";
import VariantsSection from "./sections/VariantsSection";
import Specifications from "./sections/Specifications";
import FeaturesSection from "./sections/FeaturesSection";
import MetaSection from "./sections/MetaSection";
import DescriptionSection from "./sections/DescriptionSection";
import WarrantySection from "./sections/WarrantySection";
import StatusSection from "./sections/StatusSection";

export default function AddCar() {
  const { register, handleSubmit, control, onSubmit, isSubmitting } =
    useAddCar();

  return (
    <div className="container py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <GeneralInfo register={register} control={control} />
        <DescriptionSection register={register} control={control} />
        <VariantsSection register={register} control={control} />
        <Specifications register={register} control={control} />
        <FeaturesSection control={control} />
        {/* <MediaUpload register={register} /> */}
        <WarrantySection register={register} control={control} />
        <StatusSection control={control} />
        <MetaSection register={register} control={control} />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "جاري الإضافة..." : "إضافة السيارة الآن"}
        </Button>
      </form>
    </div>
  );
}
