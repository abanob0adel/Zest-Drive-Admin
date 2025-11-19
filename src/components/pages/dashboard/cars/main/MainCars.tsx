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
  const { cars, isFetching, page, setPage } = useGetCars();
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
        <>
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
              {cars?.cars?.map((item: Car) => (
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

                      <Button variant="secondary" size="icon" asChild>
                        <a href={routes?.Dashboard?.Car?.Edit(item.slug)}>
                          <Edit />
                        </a>
                      </Button>

                      <Button variant="secondary" size="icon">
                        <Image />
                      </Button>

                      <MainDelete
                        slug={item?.slug}
                        title={item.model_name_ar}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          {cars?.pagination && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="secondary"
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                السابق
              </Button>

              <span>
                صفحة {cars.pagination.page} من {cars.pagination.pages}
              </span>

              <Button
                variant="secondary"
                disabled={page === cars.pagination.pages}
                onClick={() => setPage((p) => p + 1)}
              >
                التالي
              </Button>
            </div>
          )}
        </>
      )}

      {/* Car Details Dialog */}
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
