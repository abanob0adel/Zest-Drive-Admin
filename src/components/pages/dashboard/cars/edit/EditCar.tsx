"use client";
import { Button } from "@/components/ui/button";
import { useEditCar } from "./Logic";
import type { AddCarTypes } from "../add/types";
import GeneralInfo from "../add/sections/GeneralInfo";
import VariantsSection from "../add/sections/VariantsSection";
import Specifications from "../add/sections/Specifications";
import FeaturesSection from "../add/sections/FeaturesSection";
import MetaSection from "../add/sections/MetaSection";
import DescriptionSection from "../add/sections/DescriptionSection";
import WarrantySection from "../add/sections/WarrantySection";
import StatusSection from "../add/sections/StatusSection";

type Props = {
  slug: string;
  initialData: AddCarTypes;
};

export default function EditCar({ slug, initialData }: Props) {
  const { register, handleSubmit, control, onSubmit, isSubmitting } =
    useEditCar({ slug, initialData });

  return (
    <div className="container py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <GeneralInfo register={register} control={control} />
        <DescriptionSection register={register} control={control} />
        <VariantsSection register={register} control={control} />
        <Specifications register={register} control={control} />
        <FeaturesSection control={control} />
        <WarrantySection register={register} control={control} />
        <StatusSection control={control} />
        <MetaSection register={register} control={control} />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "جاري التعديل..." : "حفظ التعديلات"}
        </Button>
      </form>
    </div>
  );
}
