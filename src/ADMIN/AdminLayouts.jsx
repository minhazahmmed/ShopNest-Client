import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* Sidebar স্থির থাকবে */}
            <AdminSidebar />

            {/* ডানদিকের পেজগুলো পরিবর্তন হবে */}
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-[1400px] mx-auto animate-in fade-in duration-500">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;