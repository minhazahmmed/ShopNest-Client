import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Package, Settings, LogOut } from 'lucide-react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const AdminSidebar = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                navigate("/login");
            });
    };

    const menus = [
        { name: "Overview", path: "/admin/home", icon: <LayoutDashboard size={20} /> },
        { name: "Add Product", path: "/admin/add", icon: <PlusCircle size={20} /> },
        { name: "Manage Inventory", path: "/admin/inventory", icon: <Package size={20} /> },
        { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
    ];

    return (
        <div className="w-64 h-screen bg-white border-r border-gray-100 p-6 flex flex-col fixed left-0 top-0 z-50">
            <div className="flex items-center gap-2 mb-10 px-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg shadow-lg shadow-green-100"></div>
                <h1 className="text-xl font-black text-gray-800 tracking-tight">FreshAdmin</h1>
            </div>

            <nav className="flex-1 space-y-2">
                {menus.map((menu) => (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300
                            ${isActive 
                                ? 'bg-green-600 text-white shadow-xl shadow-green-100 translate-x-1' 
                                : 'text-gray-500 hover:bg-green-50 hover:text-green-600'}
                        `}
                    >
                        {menu.icon} {menu.name}
                    </NavLink>
                ))}
            </nav>

            <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all mt-auto"
            >
                <LogOut size={20} /> Logout
            </button>
        </div>
    );
};

export default AdminSidebar;