import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function DashboardLayout() {
  return (
    <>
      <div className="flex items-stretch gap-4">
        <div className="w-1/5 lg:block hidden">
          <Sidebar />
        </div>
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
