import PageHeader from "@/components/layout/PageHeader";
import routes from "@/lib/routes";
import { Add } from "iconsax-reactjs";
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
        "asd"
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
                  <img
                    src={item?.logo}
                    alt={item?.name_en}
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell>{item?.name_ar}</TableCell>
                <TableCell>{item?.name_en}</TableCell>
                <TableCell>{item?.country}</TableCell>
                <TableCell>تيست</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
