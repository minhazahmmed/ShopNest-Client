import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'; // নেভিগেশনের জন্য
import { ArrowUpDown, Tag, Star, Fish, Drumstick, Salad, Package, ShoppingBasket, Flame, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard'; 

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('default');
    const [filterBy, setFilterBy] = useState('All');
    const navigate = useNavigate(); // ব্রাউজ পেজে যাওয়ার জন্য

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/productCard.json'); 
                if (!res.ok) throw new Error('Data not found');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // ফিল্টারিং এবং সর্টিং লজিক
    const filteredAndSortedProducts = products
        .filter(item => filterBy === 'All' ? true : item.category === filterBy)
        .sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });

    // হোম পেজের জন্য শুধুমাত্র প্রথম ৮টি প্রোডাক্ট স্লাইস করা হয়েছে
    const displayedProducts = filteredAndSortedProducts.slice(0, 8);

    if (loading) {
        return <div className="text-center py-20 text-green-700 font-bold text-2xl animate-pulse">লোড হচ্ছে...</div>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
            {/* HEADER */}
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-4xl font-extrabold text-green-800">Shop Our Fresh Collection</h2>
                    <p className="text-green-600 mt-2">Quality items selected just for your daily needs</p>
                </div>
                {/* ডেক্সটপ ভিউতে ছোট একটি লিঙ্ক আকারেও থাকতে পারে */}
                <button 
                    onClick={() => navigate('/user/products')}
                    className="hidden md:flex items-center gap-2 text-green-700 font-bold hover:underline"
                >
                    View All Products <ArrowRight size={18} />
                </button>
            </div>

            <div className="flex flex-col gap-8 mb-12">
                {/* CATEGORY FILTERING */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <button 
                        onClick={() => setFilterBy('All')}
                        className={`px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'All' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        All
                    </button>

                    <button 
                        onClick={() => setFilterBy('Vegetables')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Vegetables' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <Salad size={18} /> Vegetables
                    </button>

                    <button 
                        onClick={() => setFilterBy('Fish')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Fish' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <Fish size={18} /> Fish
                    </button>

                    <button 
                        onClick={() => setFilterBy('Meat')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Meat' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <Drumstick size={18} /> Meat
                    </button>

                    <button 
                        onClick={() => setFilterBy('Grocery')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Grocery' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <ShoppingBasket size={18} /> Grocery
                    </button>

                    <button 
                        onClick={() => setFilterBy('Consumer')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Consumer' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <Package size={18} /> Consumer
                    </button>

                    <button 
                        onClick={() => setFilterBy('Masala')}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all border ${filterBy === 'Masala' ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                    >
                        <Flame size={18} /> Masala
                    </button>
                </div>

                {/* PRICE/RATING SORTING */}
                <div className="flex items-center justify-center md:justify-start gap-3 bg-white p-2 w-fit rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-gray-500 font-semibold px-2 flex items-center gap-2 text-sm">
                        <ArrowUpDown size={16} /> Order By:
                    </span>
                    <button 
                        onClick={() => setSortBy('price')} 
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${sortBy === 'price' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Tag size={14} className="inline mr-1" /> Low Price
                    </button>
                    <button 
                        onClick={() => setSortBy('rating')} 
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${sortBy === 'rating' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Star size={14} className="inline mr-1" /> Best Rating
                    </button>
                </div>
            </div>

            {/* PRODUCT GRID - এখন সর্বোচ্চ ৮টি দেখাবে */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayedProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>

            {/* Empty State */}
            {displayedProducts.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-400">No items found in {filterBy} category</h3>
                </div>
            )}

            {/* SHOP MORE BUTTON - ৮টির বেশি প্রোডাক্ট থাকলে এটি দেখা যাবে */}
            {filteredAndSortedProducts.length > 8 && (
                <div className="mt-16 text-center">
                    <button 
                        onClick={() => navigate('/user/products')}
                        className="group relative inline-flex items-center gap-3 bg-green-700 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-green-200 hover:bg-green-800 transition-all active:scale-95"
                    >
                        Shop More Products
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-gray-400 mt-4 font-medium italic">Discover {filteredAndSortedProducts.length - 8}+ more items in our shop!</p>
                </div>
            )}
        </div>
    );
};

export default Product;