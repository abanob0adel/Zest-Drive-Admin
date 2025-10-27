"use client";
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import routes from "@/lib/routes";
import { Add, Edit, Eye, Image } from "iconsax-reactjs";
import { useGetCars } from "./Logic";
import Loading from "@/components/shared/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Car } from "./types";
import CarDetailsDialog from "@/components/shared/CarDetailsDialog";
import MainDelete from "../delete/MainDelete";

export default function MainCars() {
  const { cars, isFetching } = useGetCars();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <>
      <PageHeader
        PageTitle="السيارات"
        ButtonTitle="إضافة سيارة جديدة"
        url={routes?.Dashboard?.Car?.Add}
        icon={<Add />}
      />

      {isFetching ? (
        <Loading />
      ) : (
        <Table className="mt-8">
          <TableHeader>
            <TableRow>
              <TableHead>الاسم بالعربية</TableHead>
              <TableHead>الاسم بالإنجليزية</TableHead>
              <TableHead>العلامة التجارية</TableHead>
              <TableHead>إجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars?.cars.map((item: Car) => (
              <TableRow key={item._id}>
                <TableCell>{item.model_name_ar}</TableCell>
                <TableCell>{item.model_name_en}</TableCell>
                <TableCell>
                  {typeof item.brand === "string"
                    ? item.brand
                    : item.brand?.name_en}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => setSelectedCar(item)}
                    >
                      <Eye />
                    </Button>
                    <Button variant="secondary" size="icon">
                      <Edit />
                    </Button>
                    <Button variant="secondary" size="icon">
                      <Image />
                    </Button>
                    <MainDelete slug={item?.slug} title={item.model_name_ar} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {selectedCar && (
        <CarDetailsDialog
          car={selectedCar}
          open={!!selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </>
  );
}
