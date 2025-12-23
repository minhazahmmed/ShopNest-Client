import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const productsData = [
    { id: 1, name: "Organic Banana", stock: 45, price: 12.00, category: "Fruits" },
    { id: 2, name: "Fresh Milk", stock: 12, price: 5.50, category: "Dairy" },
    { id: 3, name: "Red Tomato", stock: 0, price: 3.20, category: "Vegetables" },
];

const Inventory = () => {
    return (
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-gray-800">Inventory Management</h2>
                <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-green-100">Stock Report</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {productsData.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl group">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm"></div>
                            <div>
                                <h4 className="font-black text-gray-800">{item.name}</h4>
                                <p className="text-xs font-bold text-green-600 uppercase">{item.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-gray-400 uppercase">Stock</p>
                                <p className={`font-black ${item.stock === 0 ? 'text-red-500' : 'text-gray-700'}`}>{item.stock} pcs</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-gray-400 uppercase">Price</p>
                                <p className="font-black text-gray-700">${item.price}</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 bg-white text-blue-500 rounded-lg shadow-sm hover:bg-blue-500 hover:text-white transition-all"><Edit3 size={18}/></button>
                                <button className="p-2 bg-white text-red-500 rounded-lg shadow-sm hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18}/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Inventory;