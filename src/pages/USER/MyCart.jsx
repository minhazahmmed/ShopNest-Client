import React, { useContext } from 'react';
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from '../../Provider/AuthProvider';

const MyCart = () => {
    const { user } = useContext(AuthContext);

    // ডামি ডাটা
    const cartItems = [
        { id: 1, name: "Fresh Organic Tomato", price: 15.00, qty: 2, unit: "1kg", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=200" },
        { id: 2, name: "Green Capsicum", price: 15.00, qty: 1, unit: "500g", img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=200" },
    ];

    const handleCheckout = async () => {
        if (!user) return alert("Please Login First!");

        try {
            const response = await fetch('http://localhost:5000/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cartItems: cartItems,
                    userEmail: user.email
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; 
            }
        } catch (error) {
            console.error("Payment Error:", error);
        }
    };

    return (
        <div className="max-w-[1440px] mx-auto p-6 lg:p-10 space-y-16">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Review Your <span className="text-green-600">Fresh</span> Selection
                    </h1>
                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-bold">Subtotal</span>
                            <span className="text-xl font-bold">৳45.00</span>
                        </div>
                        <button 
                            onClick={handleCheckout}
                            className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
                        >
                            Proceed to Payment <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6 p-4">
                    <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=500" className="rounded-2xl h-56 w-full object-cover" alt="Organic" />
                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=500" className="rounded-2xl h-56 w-full object-cover" alt="Organic" />
                </div>
            </div>

            {/* Cart Table List */}
            <div className="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-bold border-b">
                            <th className="px-8 py-5">Product Details</th>
                            <th className="px-6 py-5 text-right font-mono italic">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <img src={item.img} className="w-16 h-16 rounded-xl object-cover" alt={item.name} />
                                        <div>
                                            <h4 className="font-bold text-gray-800">{item.name}</h4>
                                            <span className="text-xs text-gray-400 font-bold">{item.unit}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2.5 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all">
                                        <Trash2 size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;