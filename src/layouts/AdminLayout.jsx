import React from "react";
import { Outlet } from "react-router";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 z-50 shadow-md">
        <AdminHeader />
      </div>
      <div className="flex pt-16 h-[calc(100vh-4rem)]">
        {/* Fixed sidebar with fixed width */}
        <aside className="w-64 fixed top-16 left-0 bottom-0 bg-[#edeff2] overflow-y-auto">
          <AdminSidebar />
        </aside>

        {/* Main content with left margin to avoid sidebar */}
        <main className="flex-1 ml-64 overflow-y-auto p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
