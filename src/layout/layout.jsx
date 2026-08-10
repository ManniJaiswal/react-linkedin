import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";

export default function Layout() {
  const location = useLocation();

  return (
    <>
        <Navbar />
      <div className="flex items-center gap-4 p-4 bg-blue-50">
      <LeftSidebar />
      <main className="flex-1">
      <Outlet />
      </main>

        {location.pathname === "/" ? <RightSidebar /> : ""}
      </div>
    </>
  );
}