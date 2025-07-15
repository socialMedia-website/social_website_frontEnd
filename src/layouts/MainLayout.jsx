import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="min-h-screen bg-gray-50">
    <Topbar />
    <div className="container mx-auto px-4 py-4 flex">
      <Sidebar />
      <main className=" flex-1 ml-0 md:ml-4 mr-0 md:mr-4">
        <Outlet />
      </main>
    
    </div>
  </div>
);

export default MainLayout;
