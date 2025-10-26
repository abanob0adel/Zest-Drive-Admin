import PageHeader from "@/components/layout/PageHeader";
import routes from "@/lib/routes";
import { Add, Edit } from "iconsax-reactjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBrands } from "./Logic";
import type { SingleBrandResponse } from "@/types/Brand";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import MainDelete from "../delete/MainDelete";
export default function MainBrands() {
  const { brands, isFetching } = useGetBrands();
  return (
    <>
      <PageHeader
        PageTitle="البراندات"
        ButtonTitle="أضافة براند"
        url={routes?.Dashboard?.Brand?.Add}
        icon={<Add />}
      />
      {isFetching ? (
        <Loading />
      ) : (
        <Table className="mt-8">
          <TableHeader>
            <TableRow>
              <TableHead>الصورة</TableHead>
              <TableHead>الاسم باللغة العربية</TableHead>
              <TableHead>الاسم باللغة الانجليزية</TableHead>
              <TableHead>الصناعة</TableHead>
              <TableHead>اجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands?.map((item: SingleBrandResponse) => (
              <TableRow key={item?._id}>
                <TableCell>
                  {item?.logo ? (
                    <img
                      src={item?.logo}
                      alt={item?.name_en}
                      width={100}
                      height={100}
                      className="object-cover object-center bg-sidebar"
                    />
                  ) : (
                    <div className="bg-sidebar w-[50px] h-[50px]" />
                  )}
                </TableCell>
                <TableCell>{item?.name_ar}</TableCell>
                <TableCell>{item?.name_en}</TableCell>
                <TableCell>{item?.country}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Button variant="secondary" size="icon" asChild>
                      <a href={routes?.Dashboard?.Brand?.Edit(item.slug)}>
                        <Edit />
                      </a>
                    </Button>
                    <MainDelete title={item?.name_en} slug={item?.slug} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
