import React, { useState } from 'react';
import { ImagePlus, PackagePlus, DollarSign, Tag, AlignLeft } from 'lucide-react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [loading, setLoading] = useState(false);

    const handleAddProduct = (e) => {
        e.preventDefault();
        setLoading(true);

        // ফর্ম ডাটা সংগ্রহ
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const image = form.image.value;
        const description = form.description.value;

        const newProduct = { name, price, category, image, description };
        
        console.log("Adding Product (Dummy):", newProduct);

        // ডামি সাকসেস মেসেজ (যেহেতু ব্যাকেন্ডে সমস্যা)
        setTimeout(() => {
            toast.success(`${name} added to inventory! (Dummy)`, {
                position: "top-right",
                autoClose: 3000,
            });
            form.reset();
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-800">Add New Product</h1>
                <p className="text-gray-500 font-medium">Fill in the details to list a new item in your shop.</p>
            </div>

            <form onSubmit={handleAddProduct} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Basic Info */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                                <PackagePlus size={16} className="text-green-600" /> Product Name
                            </label>
                            <input 
                                name="name" 
                                type="text" 
                                placeholder="e.g. Organic Red Apple" 
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-gray-700"
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                                <AlignLeft size={16} className="text-green-600" /> Description
                            </label>
                            <textarea 
                                name="description" 
                                rows="5" 
                                placeholder="Write about product freshness, origin, etc." 
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none transition-all font-medium text-gray-600"
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Right Side: Pricing & Category */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                                <DollarSign size={16} className="text-green-600" /> Price ($)
                            </label>
                            <input 
                                name="price" 
                                type="number" 
                                step="0.01"
                                placeholder="0.00" 
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-gray-700"
                                required 
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                                <Tag size={16} className="text-green-600" /> Category
                            </label>
                            <select 
                                name="category" 
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                            >
                                <option value="Vegetables">Vegetables</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Meat">Meat & Fish</option>
                                <option value="Frozen">Frozen Foods</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                                <ImagePlus size={16} className="text-green-600" /> Image URL
                            </label>
                            <input 
                                name="image" 
                                type="text" 
                                placeholder="https://image-link.com" 
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-green-500 focus:bg-white outline-none transition-all font-medium text-blue-500 underline"
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-green-100 mt-4 
                                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white active:scale-95'}`}
                        >
                            {loading ? 'Publishing...' : 'Publish Product'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;