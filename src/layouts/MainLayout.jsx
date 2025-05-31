// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
