import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function DashboardLayout() {
  return (
    <>
      <div className="flex items-start gap-4=8">
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
