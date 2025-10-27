import PageHeader from "@/components/layout/PageHeader";
import routes from "@/lib/routes";
import { Add } from "iconsax-reactjs";
export default function MainCars() {
  return (
    <>
      <PageHeader
        PageTitle="السيارات"
        ButtonTitle="أضافة سيارة جديدة"
        url={routes?.Dashboard?.Car?.Add}
        icon={<Add />}
      />
      {/* {isFetching ? (
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
      )} */}
    </>
  );
}
