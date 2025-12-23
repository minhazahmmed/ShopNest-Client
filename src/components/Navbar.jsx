import React, { useState } from "react";
import Logo from "../assets/shopnest-logo.png";
import { ShoppingBasket, X, User, LayoutDashboard, LogOut, Info, HelpCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const Navbar = ({ role = "user" }) => { // এখানে role হতে পারে 'user', 'admin', বা 'guest'
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <nav className="w-full shadow-sm px-6 py-3 flex justify-between items-center z-50 sticky top-0 bg-white">
      {/* Left side: Logo + Text */}
      <Link to={'/'} className="flex items-center gap-3">
        <img
          src={Logo}
          alt="ShopNest Logo"
          className="w-12 h-12 object-contain cursor-pointer"
        />
        <div className="flex flex-col">
          <span className="text-green-500 hover:text-green-700 cursor-pointer transition-colors font-bold text-xl leading-none">
            ShopNest
          </span>
          <span className="text-[10px] md:text-sm text-gray-500">Fresh & Fast Delivery</span>
        </div>
      </Link>

      {/* Right side: Dynamic Buttons & Cart */}
      <div className="flex items-center gap-5">
        
        {/* Role Based Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {role === "admin" ? (
            <Link to="/admin/dashboard" className="flex items-center gap-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold text-sm border border-red-100 hover:bg-red-600 hover:text-white transition-all">
              <LayoutDashboard size={16} /> Admin Panel
            </Link>
          ) : role === "user" ? (
            <div className="flex items-center gap-2 text-gray-600 font-semibold">
              <User size={20} className="text-green-600" />
              <span>My Account</span>
            </div>
          ) : (
            <Link to="/login" className="bg-green-500 text-white px-5 py-2 rounded-lg font-bold hover:bg-green-600 transition-all">
              Login
            </Link>
          )}
        </div>

        {/* Shopping Cart Icon (Triggers Drawer) */}
        <div className="relative group" onClick={toggleDrawer}>
          <ShoppingBasket className="w-7 h-7 text-green-500 hover:text-green-900 cursor-pointer transition-colors" />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
            0
          </span>
        </div>
      </div>

      {/* --- SIDE DRAWER --- */}
      {/* Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]" onClick={toggleDrawer}></div>
      )}

      {/* Drawer Content */}
      <div className={`fixed top-0 right-0 h-full w-[280px] md:w-[350px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button onClick={toggleDrawer} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Drawer Menu Items */}
          <div className="flex flex-col gap-2 flex-grow">
            <Link to="/cart" className="flex items-center gap-4 p-3 hover:bg-green-50 rounded-xl font-bold text-gray-700 transition-all group">
               <ShoppingBag className="text-gray-400 group-hover:text-green-600" /> My Cart
            </Link>
            <Link to="/about" className="flex items-center gap-4 p-3 hover:bg-green-50 rounded-xl font-bold text-gray-700 transition-all group">
               <Info className="text-gray-400 group-hover:text-green-600" /> About Us
            </Link>
            <Link to="/faq" className="flex items-center gap-4 p-3 hover:bg-green-50 rounded-xl font-bold text-gray-700 transition-all group">
               <HelpCircle className="text-gray-400 group-hover:text-green-600" /> FAQ
            </Link>
            
            {/* Conditional Drawer Items for Admin */}
            {role === "admin" && (
              <Link to="/admin/orders" className="flex items-center gap-4 p-3 hover:bg-red-50 rounded-xl font-bold text-red-600 transition-all">
                <LayoutDashboard /> Manage Orders
              </Link>
            )}
          </div>

          {/* Bottom Action */}
          <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all mt-auto">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;