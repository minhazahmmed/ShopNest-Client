import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, Package, Clock, Star, ArrowRight, LayoutDashboard } from "lucide-react";

const MyDashBoard = () => {
    // এনিমেশন ভেরিয়েন্ট
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-[1440px] mx-auto p-6 lg:p-10 space-y-16"
        >
            {/* TOP HERO SECTION */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left Side: Title & Banner */}
                <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm">
                        <LayoutDashboard size={18} /> User Dashboard
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                        Welcome Back, <span className="text-green-600">User!</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-lg border-l-4 border-orange-500 pl-4">
                        Manage your orders, track shipments, and explore your favorite fresh groceries all in one professional workspace.
                    </p>
                    
                    {/* Savings Card */}
                    <motion.div 
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="relative overflow-hidden bg-green-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-green-200 group"
                    >
                        {/* Decorative Circles */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-medium opacity-90 mb-1 flex items-center gap-2">
                                    <TrendingUp size={20} /> Total Savings
                                </h3>
                                <p className="text-5xl font-black font-mono">৳2,440.50</p>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-white text-green-600 p-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                            >
                                <ArrowRight size={24} />
                            </motion.button>
                        </div>
                        <p className="mt-4 text-sm font-medium bg-white/20 w-fit px-4 py-1 rounded-full backdrop-blur-md">
                            +12% from last month
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Side: 4 Image Grid with 2-Side Borders */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 p-4">
                    {[
                        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500",
                        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500",
                        "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=500",
                        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=500"
                    ].map((url, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                            className="relative group p-2"
                        >
                            {/* 2-Side Border Effect */}
                            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-green-600 rounded-tl-2xl z-10 transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-orange-500 rounded-br-2xl z-10 transition-all duration-500 group-hover:w-full group-hover:h-full"></div>
                            
                            <img src={url} className="rounded-2xl h-48 lg:h-56 w-full object-cover shadow-lg" alt="Dashboard Visual" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* QUICK STATS SECTION (Additional Feature for Dashboard) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Active Orders", value: "04", icon: <Package />, color: "bg-blue-50 text-blue-600" },
                    { label: "Pending Delivery", value: "02", icon: <Clock />, color: "bg-orange-50 text-orange-600" },
                    { label: "Reward Points", value: "850", icon: <Star />, color: "bg-purple-50 text-purple-600" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all"
                    >
                        <div className={`p-4 rounded-2xl ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                            <p className="text-2xl font-black text-gray-800">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default MyDashBoard;