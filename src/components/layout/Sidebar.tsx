import routes from "@/lib/routes";
import { SidebarLinks, type SidebarTypes } from "@/shared/SidebarLinks";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function Sidebar() {
  return (
    <>
      <ScrollArea className="bg-sidebar min-h-screen p-8" dir="rtl">
        <a href={routes.Dashboard?.Home} className="text-4xl ">
          Zest Admin
        </a>
        <div className="flex flex-col gap-4 mt-8">
          {SidebarLinks?.map((item: SidebarTypes, index) => (
            <a
              href={item?.link}
              key={index}
              className="flex items-center gap-4 hover:bg-accent py-2 px-4 rounded-2xl"
            >
              {item?.icon}
              {item.title}
            </a>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
