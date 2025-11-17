import routes from "@/lib/routes";
import { Car, SmartCar } from "iconsax-reactjs";

export interface SidebarTypes {
  title: string;
  link: string;
  icon: React.ReactNode;
}
export const SidebarLinks: SidebarTypes[] = [
  {
    title: "قائمة البراندات",
    link: routes?.Dashboard?.Brand?.Main,
    icon: <Car />,
  },
  {
    title: "قائمة السيارات",
    link: routes?.Dashboard?.Car?.Main,
    icon: <SmartCar />,
  },
];
