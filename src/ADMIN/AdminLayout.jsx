import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen">
            {/* ১. বামপাশের সাইডবার: এটি ফিক্সড থাকবে */}
            <AdminSidebar />

            {/* ২. ডানপাশের কন্টেন্ট এরিয়া: এখানে সব পেজ লোড হবে */}
            <main className="flex-1 ml-64 min-h-screen">
                {/* টপ বার বা হেডার চাইলে এখানে অ্যাড করা যায়, নাহলে সরাসরি কন্টেন্ট */}
                <div className="p-8">
                    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {/* নিচের <Outlet /> অংশটিতেই আমাদের AdminHome, AddProduct, 
                            বা AllUsers এর মত কম্পোনেন্টগুলো রেন্ডার হবে। 
                        */}
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;