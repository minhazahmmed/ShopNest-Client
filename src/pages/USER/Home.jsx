import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Product from './Product';
import ReviewsClients from '../../Shared Components/ReviewsClients';
import DeliveryFeature from './DeliveryFeature';

// ৪টি ইমেজের অ্যারে (এখানে আপনার ইমেজ পাথ বসিয়ে দিন)
const banners = [
    {
        id: 1,
        title: "Fresh Organic Vegetables",
        subtitle: "Straight from farm to your kitchen",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000",
        discount: "Up to 30% Off"
    },
    {
        id: 2,
        title: "Premium Dairy Products",
        subtitle: "Pure and healthy milk products",
        image: "https://images.unsplash.com/photo-1528498033973-3c0c1444984b?q=80&w=2000",
        discount: "Flat 10% Off"
    },
    {
        id: 3,
        title: "Exotic Fruits Collection",
        subtitle: "Nature's candy delivered fast",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2000",
        discount: "Buy 1 Get 1"
    },
    {
        id: 4,
        title: "Daily Grocery Essentials",
        subtitle: "Everything you need at best prices",
        image: "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=2000",
        discount: "Hot Deals"
    }
];

const Home = () => {
    const [current, setCurrent] = useState(0);

    // অটো স্লাইডার (প্রতি ৫ সেকেন্ডে ইমেজ চেঞ্জ হবে)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
           
            {/* HERO SLIDER SECTION */}
            <div className="relative h-[500px] w-full overflow-hidden bg-green-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        {/* Background Image with Overlay */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${banners[current].image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                        </div>

                        {/* Banner Content */}
                        <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center items-start text-white">
                            <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 flex items-center gap-2"
                            >
                                <Zap size={16} /> {banners[current].discount}
                            </motion.span>
                            
                            <motion.h1 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
                            >
                                {banners[current].title.split(" ").map((word, i) => (
                                    <span key={i} className={i === 1 ? "text-green-400" : "text-white"}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </motion.h1>

                            <motion.p 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl"
                            >
                                {banners[current].subtitle}
                            </motion.p>

                            <motion.div 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-4"
                            >
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
                                    Shop Now <ShoppingBag size={20} />
                                </button>
                                <button className="border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-bold transition-all">
                                    View Offers
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3 rounded-full transition-all ${current === index ? "bg-green-500 w-8" : "bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>

            {/* QUICK CATEGORIES (Optional) */}
            <div className="max-w-[1200px] mx-auto py-12 px-4">
               
                <Product></Product>
                 <DeliveryFeature></DeliveryFeature>
                <ReviewsClients></ReviewsClients>
            </div>
        </div>
    );
};

export default Home;