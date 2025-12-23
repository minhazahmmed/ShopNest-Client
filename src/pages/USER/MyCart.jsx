import React from 'react';
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const MyCart = () => {
    const cartItems = [
        { id: 1, name: "Fresh Organic Tomato", price: 15.00, qty: 2, unit: "1kg", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=200" },
        { id: 2, name: "Green Capsicum", price: 15.00, qty: 1, unit: "500g", img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=200" },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-[1440px] mx-auto p-6 lg:p-10 space-y-16"
        >
            {/* TOP SECTION: TITLE & SUMMARY */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                
                {/* Right Side: Content */}
                <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase"
                    >
                        Shopping Summary
                    </motion.div>
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Review Your <span className="text-green-600">Fresh</span> Selection
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md border-l-4 border-green-500 pl-4 italic">
                        You have <span className="font-bold text-black font-mono underline decoration-green-500">{cartItems.length} items</span> in your cart. Thank you for choosing our premium organic collection.
                    </p>
                    
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-medium font-mono">Subtotal</span>
                            <span className="text-xl font-bold">৳45.00</span>
                        </div>
                        <div className="flex justify-between items-center text-green-600">
                            <span className="font-medium">Delivery Charge</span>
                            <span className="font-bold uppercase italic text-sm underline decoration-double font-mono">Free</span>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                        >
                            Confirm Order <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Left Side: 4 Image Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 p-4">
                    {[
                        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=500",
                        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=500",
                        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=500",
                        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=500"
                    ].map((url, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className="relative group p-2"
                        >
                            {/* Animated 2-Side Borders */}
                            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-green-600 rounded-tl-2xl z-10 group-hover:w-full group-hover:h-full transition-all duration-500"></div>
                            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-2xl z-10 group-hover:w-full group-hover:h-full transition-all duration-500"></div>
                            
                            <img src={url} className="rounded-2xl h-56 w-full object-cover shadow-lg" alt="Organic Product" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* BOTTOM SECTION: CART TABLE */}
            <motion.div variants={itemVariants} className="w-full">
                <div className="flex items-center gap-3 mb-8">
                    <motion.div 
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="p-2 bg-green-600 rounded-lg text-white shadow-md"
                    >
                        <ShoppingBag size={24} />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-800">Shopping Cart List</h2>
                </div>

                <div className="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-bold tracking-widest border-b">
                                <th className="px-8 py-5">Product Details</th>
                                <th className="px-6 py-5">Price</th>
                                <th className="px-6 py-5 text-center">Quantity</th>
                                <th className="px-6 py-5">Total</th>
                                <th className="px-8 py-5 text-right font-mono">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {cartItems.map((item) => (
                                <motion.tr 
                                    variants={itemVariants}
                                    whileHover={{ backgroundColor: "rgba(240, 253, 244, 0.5)" }}
                                    key={item.id} 
                                    className="transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <img src={item.img} className="w-16 h-16 rounded-xl object-cover border shadow-sm group-hover:scale-105 transition-transform" alt={item.name} />
                                            <div>
                                                <h4 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">{item.name}</h4>
                                                <span className="text-xs text-gray-400 font-bold font-mono uppercase tracking-tighter">{item.unit}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-bold text-gray-600 font-mono">৳{item.price.toFixed(2)}</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center justify-center gap-3 bg-gray-100 w-fit mx-auto px-3 py-1.5 rounded-xl border border-gray-200">
                                            <button className="text-gray-400 hover:text-red-500 transition-colors active:scale-90"><Minus size={16} /></button>
                                            <span className="font-black text-gray-800 min-w-[20px] text-center font-mono">{item.qty}</span>
                                            <button className="text-gray-400 hover:text-green-600 transition-colors active:scale-90"><Plus size={16} /></button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-bold text-green-700 font-mono">৳{(item.price * item.qty).toFixed(2)}</td>
                                    <td className="px-8 py-6 text-right">
                                        <motion.button 
                                            whileTap={{ scale: 0.8 }}
                                            className="p-2.5 text-red-400 hover:text-white hover:bg-red-500 rounded-xl transition-all border border-red-50 shadow-sm"
                                        >
                                            <Trash2 size={20} />
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MyCart;