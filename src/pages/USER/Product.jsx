import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router'; 
import { ArrowUpDown, Tag, Star, Fish, Drumstick, Salad, Package, ShoppingBasket, Flame, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard'; 

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('default');
    const [filterBy, setFilterBy] = useState('All');
    
    const navigate = useNavigate();
    const location = useLocation(); 

    // চেক করা হচ্ছে ইউজার কি হোম পেজে আছে নাকি অল প্রোডাক্টস পেজে
    const isHomePage = location.pathname === '/user' || location.pathname === '/user/';

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

    // ফিল্টারিং এবং সর্টিং
    const filteredAndSortedProducts = products
        .filter(item => filterBy === 'All' ? true : item.category === filterBy)
        .sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });

    // মেইন লজিক: হোম পেজ হলে ৮টি, নাহলে সবগুলো
    const displayedProducts = isHomePage 
        ? filteredAndSortedProducts.slice(0, 8) 
        : filteredAndSortedProducts;

    if (loading) {
        return <div className="text-center py-20 text-green-700 font-bold text-2xl animate-pulse">লোড হচ্ছে...</div>;
    }

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
            {/* HEADER */}
            <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-4xl font-extrabold text-green-800">
                        {isHomePage ? "Shop Our Fresh Collection" : "All Premium Products"}
                    </h2>
                    <p className="text-green-600 mt-2">
                        {isHomePage ? "Quality items selected just for your daily needs" : `Showing total ${filteredAndSortedProducts.length} items`}
                    </p>
                </div>
                
                {isHomePage && (
                    <button 
                        onClick={() => navigate('/user/products')}
                        className="hidden md:flex items-center gap-2 text-green-700 font-bold hover:underline"
                    >
                        View All Products <ArrowRight size={18} />
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-8 mb-12">
                {/* CATEGORY FILTERING */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    {['All', 'Vegetables', 'Fish', 'Meat', 'Grocery', 'Consumer', 'Masala'].map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setFilterBy(cat)}
                            className={`px-6 py-2 rounded-full font-bold transition-all border ${filterBy === cat ? 'bg-green-700 text-white shadow-lg' : 'bg-white text-green-700 border-green-200 hover:bg-green-50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* PRICE/RATING SORTING */}
                <div className="flex items-center justify-center md:justify-start gap-3 bg-white p-2 w-fit rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-gray-500 font-semibold px-2 flex items-center gap-2 text-sm">
                        <ArrowUpDown size={16} /> Order By:
                    </span>
                    <button onClick={() => setSortBy('price')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${sortBy === 'price' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <Tag size={14} className="inline mr-1" /> Low Price
                    </button>
                    <button onClick={() => setSortBy('rating')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${sortBy === 'rating' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`} >
                        <Star size={14} className="inline mr-1" /> Best Rating
                    </button>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayedProducts.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>

            {/* EMPTY STATE */}
            {displayedProducts.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold text-gray-400">No items found</h3>
                </div>
            )}

            {/* SHOP MORE BUTTON - শুধুমাত্র হোম পেজে থাকলে দেখাবে */}
            {isHomePage && filteredAndSortedProducts.length > 8 && (
                <div className="mt-16 text-center">
                    <button 
                        onClick={() => navigate('/user/products')}
                        className="group relative inline-flex items-center gap-3 bg-green-700 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-green-800 transition-all active:scale-95"
                    >
                        Shop More Products
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;