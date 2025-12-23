import React, { useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider"; 
import Logo from "../../assets/shopnest-logo.png"; 
import { 
    ShoppingBasket, X, User, ShoppingBag, HelpCircle, 
    Info, LogOut, LayoutGrid, History 
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";

const UserNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [cartCount, setCartCount] = useState(2); 

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toggleDrawer();
                navigate("/");
            })
            .catch(error => console.error("Logout error:", error));
    };

    const activeClass = ({ isActive }) => 
        isActive 
        ? "text-green-600 font-bold border-b-2 border-green-600 pb-1 flex items-center gap-2 transition-all" 
        : "text-gray-600 hover:text-green-600 transition-colors font-semibold flex items-center gap-2";

    const drawerActiveClass = ({ isActive }) =>
        isActive
        ? "flex items-center gap-4 p-3.5 bg-green-100 text-green-700 rounded-xl font-bold transition-all w-full"
        : "flex items-center gap-4 p-3.5 hover:bg-green-50 rounded-xl font-bold text-gray-700 group transition-all w-full";

    return (
        <nav className="w-full shadow-sm px-6 py-3 bg-white sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center relative">
                
                {/* Logo Section */}
                <div className="shrink-0">
                    <Link to='/user' className="flex items-center gap-3">
                        <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
                        <div className="flex flex-col">
                            <span className="text-green-600 font-bold text-xl leading-none">ShopNest</span>
                            <span className="text-[10px] text-gray-400 font-medium">Quality groceries, right on time.</span>
                        </div>
                    </Link>
                </div>

                {/* Navbar Links (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-10">
                    <NavLink to="/user/products" className={activeClass}>Browse Products</NavLink>
                    <NavLink to="/user/about" className={activeClass}>About Us</NavLink>
                    <NavLink to="/user/faq" className={activeClass}>FAQ</NavLink>
                </div>

                {/* Shopping Basket - ক্লিক করলে সরাসরি কার্ট পেজে যাবে */}
                <div className="flex items-center gap-4 md:gap-6">
                    <Link to="/user/cart" className="relative p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all active:scale-95">
                        <ShoppingBasket size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white animate-in zoom-in duration-300">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    
                    {/* ইউজার মেনু ড্রয়ার ওপেন করার জন্য বাটন */}
                    <button onClick={toggleDrawer} className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition-all">
                        <User size={24} />
                    </button>
                </div>
            </div>

            {/* SIDE DRAWER */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60" onClick={toggleDrawer}></div>
            )}

            <div className={`fixed top-0 right-0 h-full w-[300px] md:w-[340px] bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-600 rounded-lg text-white">
                                <User size={20} />
                            </div>
                            <h2 className="text-lg font-bold text-gray-800">User Menu</h2>
                        </div>
                        <button onClick={toggleDrawer} className="p-1 hover:bg-gray-100 rounded-full">
                            <X size={24} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-1.5 grow overflow-y-auto">
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold ml-3 mb-1">Personal</p>
                        
                        {/* ১. My Dashboard পাথ ফিক্স করা হয়েছে */}
                        <NavLink to="/user/dashboard" onClick={toggleDrawer} className={drawerActiveClass}>
                           <History size={20} className="shrink-0" /> My Dashboard
                        </NavLink>
                        
                        {/* ২. My Cart পাথ ফিক্স করা হয়েছে */}
                        <NavLink to="/user/cart" onClick={toggleDrawer} className={drawerActiveClass}>
                           <ShoppingBag size={20} className="shrink-0" /> My Cart & Orders
                        </NavLink>

                        <div className="my-2 border-t border-gray-100"></div>
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold ml-3 mb-1">Explore</p>
                        
                        <NavLink to="/user/products" onClick={toggleDrawer} className={drawerActiveClass}>
                           <LayoutGrid size={20} className="shrink-0" /> All Products
                        </NavLink>

                        <NavLink to="/user/about" onClick={toggleDrawer} className={drawerActiveClass}>
                           <Info size={20} className="shrink-0" /> About Us
                        </NavLink>

                        <NavLink to="/user/faq" onClick={toggleDrawer} className={drawerActiveClass}>
                           <HelpCircle size={20} className="shrink-0" /> FAQ & Support
                        </NavLink>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <button 
                            onClick={handleLogOut} 
                            className="w-full bg-red-50 text-red-600 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all active:scale-95"
                        >
                            <LogOut size={20} /> Logout Account
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNav;