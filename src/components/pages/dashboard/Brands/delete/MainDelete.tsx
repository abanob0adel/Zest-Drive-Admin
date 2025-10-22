import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Trash } from "iconsax-reactjs";
import { useDeleteBrand } from "./Logic";
interface DeleteType {
  title: string;
  slug: string;
}
const MainDelete: React.FC<DeleteType> = ({ title, slug }) => {
  const { handleDelete } = useDeleteBrand();
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive" size="icon">
            <Trash />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <h2>هل انت متاكد من حذف {title}</h2>
          <Button
            variant="destructive"
            className="w-full mt-8"
            onClick={() => handleDelete(slug)}
          >
            متأكد
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default MainDelete;
