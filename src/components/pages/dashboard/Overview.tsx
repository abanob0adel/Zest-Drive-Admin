import routes from "@/lib/routes";
import { Car, SmartCar } from "iconsax-reactjs";

export default function Overview() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <a
          href={routes?.Dashboard?.Brand.Main}
          className="bg-sidebar p-8 h-40 flex items-center gap-4 justify-center rounded-2xl"
        >
          <Car />
          قائمة البراندات
        </a>
        <a
          href={routes?.Dashboard?.Car.Main}
          className="bg-sidebar p-8 h-40 flex items-center gap-4 justify-center rounded-2xl"
        >
          <SmartCar />
          قائمة السيارات
        </a>
        <div className="bg-sidebar p-8 h-40 flex items-center justify-center rounded-2xl">
          قريبا!
        </div>
        <div className="bg-sidebar p-8 h-40 flex items-center justify-center rounded-2xl">
          قريبا!
        </div>
        <div className="bg-sidebar p-8 h-40 flex items-center justify-center rounded-2xl">
          قريبا!
        </div>
        <div className="bg-sidebar p-8 h-40 flex items-center justify-center rounded-2xl">
          قريبا!
        </div>
      </div>
    </>
  );
}
