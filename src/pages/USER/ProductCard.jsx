import React from 'react';
import { Eye, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router'; 

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/user/product/${product.id}`, { state: { product } }); 
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // এটি ডিটেইলস পেজে যাওয়া বন্ধ করবে
        alert(`${product.name} added to cart!`);
        // এখানে আপনার কার্ট লজিক বা Context এর কাজ করবেন
    };

    return (
        <div 
            onClick={handleViewDetails}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
        >
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                        onClick={(e) => { e.stopPropagation(); handleViewDetails(); }}
                        className="p-2 bg-white rounded-full text-green-600 shadow-md hover:bg-green-600 hover:text-white transition-colors"
                    >
                        <Eye size={18} />
                    </button>
                </div>

                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
                    {product.category}
                </span>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 hover:text-green-700 truncate mr-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center text-orange-500 text-sm font-bold shrink-0">
                        <Star size={14} className="fill-orange-500" /> {product.rating}
                    </div>
                </div>

                <p className="text-sm text-gray-500 line-clamp-1 mb-4">
                    {product.description || "Fresh and organic premium grocery items."}
                </p>
                
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-xs text-gray-400 block uppercase font-semibold">
                            {product.unit}
                        </span>
                        <span className="text-2xl font-bold text-green-700">৳{product.price}</span>
                    </div>
                    
                    <button 
                        onClick={handleAddToCart}
                        className="bg-green-100 text-green-700 p-3 rounded-xl hover:bg-green-700 hover:text-white transition-all active:scale-95 shadow-sm"
                    >
                        <ShoppingCart size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;