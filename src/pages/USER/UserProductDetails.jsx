import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Truck } from 'lucide-react';

const UserProductDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const product = state?.product;

    if (!product) {
        return <div className="text-center py-20">Product not found!</div>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-gray-500 hover:text-green-700 font-bold mb-8 transition-colors"
            >
                <ArrowLeft size={20} /> Back to Products
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-4xl shadow-sm border border-gray-100">
                {/* Product Image */}
                <div className="bg-gray-50 rounded-3xl overflow-hidden flex items-center justify-center p-6">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">
                        {product.category}
                    </span>
                    <h1 className="text-4xl font-black text-gray-800 mb-4">{product.name}</h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">
                            <Star size={18} className="fill-orange-500" /> {product.rating}
                        </div>
                        <span className="text-gray-400 font-medium">|</span>
                        <span className="text-gray-500 font-bold">{product.unit}</span>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {product.description || "Our premium quality items are sourced directly from nature, ensuring freshness and nutrition for your family every single day."}
                    </p>

                    <div className="flex items-end gap-2 mb-10">
                        <span className="text-4xl font-black text-green-700">৳{product.price}</span>
                        <span className="text-gray-400 font-bold mb-1 line-through">৳{product.price + 20}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-green-700 text-white h-16 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-800 transition-all active:scale-95 shadow-lg shadow-green-100">
                            <ShoppingCart /> Add to Bucket
                        </button>
                    </div>

                    {/* Features Mini-Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-sm font-bold text-gray-600">100% Organic</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                <Truck size={20} />
                            </div>
                            <span className="text-sm font-bold text-gray-600">Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProductDetails;